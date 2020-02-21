import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
