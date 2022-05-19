import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ToastComponent } from './components/toast/toast.component';

const components = [HeaderComponent, ToastComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [...components]
})
export class SharedModule {}
