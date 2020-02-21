import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phoneNumber = new FormControl('', [Validators.required, Validators.pattern(/[0-9]{10}/)]);
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
