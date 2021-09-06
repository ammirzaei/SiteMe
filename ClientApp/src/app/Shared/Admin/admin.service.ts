import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  httpHeader = new HttpHeaders({
    'Content-Type': 'Application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  httpError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert('سرور در دسترس نیست');
    }
    return throwError(error);
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
    return this.http.get(environment.AddressServer + '/Admin/GetAdminPanelInfo').pipe(catchError(this.httpError));
  }
}
