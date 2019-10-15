import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) {}

  response: Object;
  showResponse = false;

  url = 'https://jsonplaceholder.typicode.com/posts';

  sendData(name: string, email: string, message: string, shouldAddToNewsletter: boolean) {
    this.http.post(this.url, {
      name: name,
      email: email,
      message: message,
      shouldAddToNewsletter: shouldAddToNewsletter
    }).subscribe(
      response => {
        this.response = response;
        this.showResponse = true;
        console.log(response);
      },
      error => {
        console.log('Error occured ' + error);
      }
    );
  }
}
