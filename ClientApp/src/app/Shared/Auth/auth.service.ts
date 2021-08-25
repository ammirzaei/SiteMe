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
  // Error(error: HttpErrorResponse) {
  //   if (error.status === 401) {
  //     localStorage.clear();
  //     // this.router.navigate(['/Account/Login']);
  //   }
  //   // return throwError('لطفا دوباره تلاش کنید');
  //   return error.status;
  // }
  Login(Login: Login) {
    return this.http.post(environment.AddressServer + "/Auth/Login", Login,{observe:"response"});
  }
}
