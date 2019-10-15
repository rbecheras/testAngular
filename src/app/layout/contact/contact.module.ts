import { ContactRoutingModule } from '../contact/contact-routing.module';
import { ContactComponent } from '../contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  declarations: [
    ContactComponent
  ],
  providers: []
})
export class ContactModule { }
