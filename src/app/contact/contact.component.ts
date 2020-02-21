import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

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

  constructor(private contactService: ContactService) { }

  public submit() {
    if (!this.name.errors && !this.email.errors && !this.phoneNumber.errors) {
      this.contactService.postData({
        name: this.name.value,
        email: this.email.value,
        phoneNumber: this.phoneNumber.value,
        shouldAddToNewsletter: this.shouldAddToNewsletter.value
      }).toPromise().then(resp => {
        console.log({ resp });
      }).catch(err => {
        console.error({ err });
      });
    } else {
      console.error('form input errors');
    }
  }
}
