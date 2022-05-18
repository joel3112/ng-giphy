import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const components = [HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [...components]
})
export class SharedModule {}
