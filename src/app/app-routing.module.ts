import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ReativeFormComponent } from './reative-form/reative-form.component';
import { AutoCompleteComponent } from './all-material/auto-complete/auto-complete.component';
import { MyStoreComponent } from './my-store/my-store.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'my-products', component: MyStoreComponent},
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'reactive-form', component: ReativeFormComponent },
  { path: 'all-material-component', component: AutoCompleteComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
