import { Directive, HostListener, Input } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';

@Directive({
  selector: '[appCopyClipboard]'
})
export class CopyClipboardDirective {
  @Input() value: string;

  constructor(private toastService: ToastService) {
    this.value = '';
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.stopPropagation();

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(this.value);

      this.toastService.emitOpened({
        message: 'Link copied to clipboard'
      });
    }
  }
}
