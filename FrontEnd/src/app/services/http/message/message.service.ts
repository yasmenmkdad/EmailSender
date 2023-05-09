import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailBody } from 'src/app/models/email-body';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private url = 'https://localhost:7198/Message/';
  constructor(private http: HttpClient) {}

  Add(body: EmailBody): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'Add', body);
  }
  Get(id: number) {
    return this.http.get<EmailBody>(this.url + 'Get?id=' + id);
  }
  GetAll() {
    return this.http.get<EmailBody[]>(this.url + 'GetAll');
  }
}
