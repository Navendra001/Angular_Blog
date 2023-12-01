import { Component } from '@angular/core';
import { FormBuilder, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.scss'],
})
export class ReativeFormComponent {
  constructor(private fb: FormBuilder) { }
  name = new FormControl('');
  hobby = new FormControl('');

  formControlSubmit() {
    console.log("formControlSubmit >>>", this.name.value, this.hobby.value)
  }

  userDetailsForm = this.fb.group({
    firstName: ['',],
    lastName: ['',],
    mobileNumber: ['',],
    dob: ['',],
    email: ['',],
    // address: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: [''],
    // }),
    // postatAddress: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: [''],
    // }),
  });

  onUserFormSubmit(){
console.log('onUserFormSubmit >>> ', this.userDetailsForm.value)
  }
}
