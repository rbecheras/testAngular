import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  public postData(contact: Contact) {
    return this.http.post('http://localhost:8080/apis/contacts', contact);
  }
}
