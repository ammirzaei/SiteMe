import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Message } from './ContactMessage';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  httpHeader = new HttpHeaders({
    'Content-Type': 'Application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  httpError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert("سرور در دسترس نیست");
    }
    return throwError(error);
  }
  GetIP() {
    return this.http.get('http://api.ipify.org/?format=json');
  }
  AddMessage(message: Message) {
    return this.http.post(environment.AddressServer + '/Contact/CreateMessage', message, { observe: 'response' }).pipe(catchError(this.httpError));
  }
  GetAllMessages() {
    return this.http.get(environment.AddressServer + '/Contact/GetAllMessages', { headers: this.httpHeader }).pipe(catchError(this.httpError));
  }
  ChangeShowMessage(contactId: number) {
    return this.http.put(environment.AddressServer + `/Contact/ChangeShowMessage/${contactId}`, null, { headers: this.httpHeader }).pipe(catchError(this.httpError));
  }
  DeleteMessage(contactID: number) {
    return this.http.delete(environment.AddressServer + `/Contact/DeleteMessage/${contactID}`, { headers: this.httpHeader }).pipe(catchError(this.httpError));
  }
}
