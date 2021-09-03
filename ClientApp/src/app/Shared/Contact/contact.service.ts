import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './ContactMessage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  GetIP() {
    return this.http.get('http://api.ipify.org/?format=json');
  }
  AddMessage(message: Message) {
    return this.http.post(environment.AddressServer + '/Contact/CreateMessage', message, { observe: 'response' });
  }
  GetAllMessages() {
    return this.http.get(environment.AddressServer + '/Contact/GetAllMessages');
  }
}
