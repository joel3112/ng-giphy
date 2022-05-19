import { NgModule } from '@angular/core';
import { CopyClipboardDirective } from './copy-clipboard/copy-clipboard.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const directives = [CopyClipboardDirective];

@NgModule({
  declarations: [...directives],
  imports: [BrowserAnimationsModule],
  exports: [...directives]
})
export class DirectivesModule {}
