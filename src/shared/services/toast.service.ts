import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  opened?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private openedSubject: BehaviorSubject<Toast> = new BehaviorSubject<Toast>({
    message: '',
    opened: false
  });

  constructor() {}

  public emitOpened(toast: Toast) {
    this.openedSubject.next({ ...toast, opened: true });

    setTimeout(() => {
      this.openedSubject.next({ ...toast, opened: false });
    }, 3000);
  }
  public subscribeOpened(): BehaviorSubject<Toast> {
    return this.openedSubject;
  }
}
