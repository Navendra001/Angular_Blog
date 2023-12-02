import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AutoCompleteComponent } from './auto-complete.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [AutoCompleteComponent],
  imports: [MatMenuModule, CommonModule, MatButtonModule,MatIconModule,MatCardModule,
    MatAutocompleteModule],
})
export class AutoCompleteModule {}
