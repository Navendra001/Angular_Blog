import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AutoCompleteComponent } from './auto-complete.component';

@NgModule({
  declarations: [AutoCompleteComponent],
  imports: [MatMenuModule, CommonModule, MatButtonModule],
})
export class AutoCompleteModule {}
