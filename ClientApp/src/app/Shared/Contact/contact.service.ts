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
  httpError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert("سرور در دسترس نیست");
    }
    return throwError(error);
  }
  GetIP() {
    return this.http.get('https://api.ipify.org/?format=json');
  }
  AddMessage(message: Message) {
    return this.http.post(environment.AddressServer + '/Contact/CreateMessage', message, { observe: 'response' }).pipe(catchError(this.httpError));
  }

}
