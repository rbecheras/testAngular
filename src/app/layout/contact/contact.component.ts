import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
      this.contactForm = this.formBuilder.group({
        name: '',
        email: '',
        message: '',
        shouldAddToNewsletter: false
      });
  }

  onSubmitForm() {
    const formValue = this.contactForm.value;
    const newUser = new User(
      formValue['name'],
      formValue['email'],
      formValue['message'],
      formValue['shouldAddToNewsletter']
    );
    console.log(formValue);
  }
}




