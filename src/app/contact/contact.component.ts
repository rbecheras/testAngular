import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name = new FormControl('Bob', [Validators.required]);
  email = new FormControl('bob@example.com', [Validators.required]);
  phoneNumber = new FormControl('555 123 456', [Validators.required]);
  shouldAddToNewsletter = new FormControl(true);

  nameRequiredError = false;
  emailRequiredError = false;
  phoneNumberRequiredError = false;
  shouldAddToNewsletterRequiredError = false;

  public submit() {
    console.log({
      name: this.name,
      email: this.email,
      phone: this.phoneNumber,
      newsletter: this.shouldAddToNewsletter
    });

    if (!this.name.errors && !this.email.errors && !this.phoneNumber.errors) {
      console.log('submit');
    } else {
      console.error('form input errors');
    }
  }
}
