import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from './Auth';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  httpError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert("سرور در دسترس نیست");
    }
    return throwError(error);
  }
  Login(Login: Login) {
    return this.http.post(environment.AddressServer + "/Auth/Login", Login, {}).pipe(catchError(this.httpError));
  }
}
