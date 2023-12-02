import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReativeFormComponent } from './reative-form/reative-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutoCompleteModule } from './all-material/auto-complete/auto-complete.module';
import { MyStoreComponent } from './my-store/my-store.component';
import { MyStoreModule } from './my-store/my-store.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    DataFormComponent,
    FormBuilderComponent,
    ReativeFormComponent,
    MyStoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    CdkDropList,
    CdkDrag,
    TextFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AutoCompleteModule,
    MyStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
