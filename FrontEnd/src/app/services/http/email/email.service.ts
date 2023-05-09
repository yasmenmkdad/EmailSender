import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailForm } from 'src/app/models/email-Form';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private url = 'https://localhost:7198/Email/';
  constructor(private http: HttpClient) {}
  send(email: EmailForm) {
    return this.http.post<boolean>(this.url + 'send', email);
  }
}
