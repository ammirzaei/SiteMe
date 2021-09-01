import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './../../Shared/Auth/Auth';
import { AuthService } from './../../Shared/Auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _AuthService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  Login: Login = new Login();
  unAuthorize: boolean = false;
  SubmitForm(form: NgForm) {
    this._AuthService.Login(form.value).subscribe((success: any) => {
      localStorage.setItem('token', success['token']);
      this.router.navigate(['/Admin']);
    }, (error) => {
      this.unAuthorize = true;
    })
  }
}
