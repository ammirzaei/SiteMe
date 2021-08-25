import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _translate: TranslateService, private _title: Title) {
    // if (_translate.currentLang === undefined)
    //   _translate.use('fa'); 
  }

  ngOnInit(): void {
    this._translate.get('Title.Contact').subscribe(t => {
      this._title.setTitle(t);
    });
  }

  FormGroup: FormGroup = new FormGroup({
    FullName: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(150)
    ]),
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(200)
    ]),
    Message: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(900)
    ])
  });
  GetErrorForm(input: string) {
    var errorText = '';
    if (this.FormGroup.invalid) {
      if (this.FormGroup.get('FullName')?.invalid && input === "FullName") {
        if (this.FormGroup.get(input)?.errors?.required) {
          this._translate.get('Contact.FormControlFullName-required').subscribe(t => {
            errorText = t
          })
          return errorText;
        }
        if (this.FormGroup.get(input)?.errors?.minlength) {
          this._translate.get('Contact.FormControlFullName-minLength').subscribe(t => {
            errorText = t
          });
          return errorText;
        }
        if (this.FormGroup.get(input)?.errors?.maxlength) {
          this._translate.get('Contact.FormControlFullName-maxLength').subscribe(t => {
            errorText = t
          });
          return errorText;
        }
      }
      if (this.FormGroup.get('Email')?.invalid && input === "Email") {
        if (this.FormGroup.get(input)?.errors?.required) {
          this._translate.get('Contact.FormControlEmail-required').subscribe(t => {
            errorText = t
          });
          return errorText;
        }
        if (this.FormGroup.get(input)?.errors?.email) {
          this._translate.get('Contact.FormControlEmail-email').subscribe(t => {
            errorText = t
          });
          return errorText;
        }
        if (this.FormGroup.get(input)?.errors?.maxlength) {
          this._translate.get('Contact.FormControlEmail-maxLength').subscribe(t => {
            errorText = t
          });
          return errorText;
        }
      }
      if (this.FormGroup.get('Message')?.invalid && input === "Message") {
        if (this.FormGroup.get(input)?.errors?.required) {
          this._translate.get('Contact.FormControlMessage-required').subscribe(t => {
            errorText = t
          });
          return errorText;
        }
        if (this.FormGroup.get(input)?.errors?.minlength) {
          this._translate.get('Contact.FormControlMessage-minLength').subscribe(t => {
            errorText = t
          });
          return errorText;
        }
        if (this.FormGroup.get(input)?.errors?.maxlength) {
          this._translate.get('Contact.FormControlMessage-maxLength').subscribe(t => {
            errorText = t
          });
          return errorText;
        }
      }
    }
    return errorText;
  }
  OnSubmitContact(forme: NgForm) {

  }
  ShowFullNameError: boolean = false;
  ShowEmailError: boolean = false;
  ShowMessageError: boolean = false;
}
