import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { }
  httpHeader = new HttpHeaders({
    'Content-Type': 'Application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  httpError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert('سرور در دسترس نیست');
    }
    if (error.status === 401) {
      alert('توکن غیر مجاز است');
      localStorage.removeItem('token');
      this.router.navigate(['/Auth']);
    }
    return throwError("Has Error");
  }
  GetAllMessages() {
    return this.http.get(environment.AddressServer + '/Admin/GetAllMessages', { headers: this.httpHeader }).pipe(catchError(this.httpError));
  }
  ChangeShowMessage(contactId: number) {
    return this.http.put(environment.AddressServer + `/Admin/ChangeShowMessage/${contactId}`, null, { headers: this.httpHeader }).pipe(catchError(this.httpError));
  }
  DeleteMessage(contactID: number) {
    return this.http.delete(environment.AddressServer + `/Admin/DeleteMessage/${contactID}`, { headers: this.httpHeader }).pipe(catchError(this.httpError));
  }
  GetAdminPanelInfo() {
    return this.http.get(environment.AddressServer + '/Admin/GetAdminPanelInfo', { headers: this.httpHeader }).pipe(catchError(this.httpError));
  }
  ShareShowMessage = new Subject<any>();
}
