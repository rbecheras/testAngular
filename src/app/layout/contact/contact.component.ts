import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  contactForm: FormGroup;
  validForm = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  ngOnInit() {
    this.initForm();
    this.userService.showResponse = false;
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      shouldAddToNewsletter: [false, Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.contactForm.value;
    const name = formValue['name'];
    const email = formValue['email'];
    const message = formValue['message'];
    const shouldAddToNewsletter = formValue['shouldAddToNewsletter'];
    this.validForm = true;
    this.userService.sendData(name, email, message, shouldAddToNewsletter);
  }
}




