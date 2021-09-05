import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Message } from '../../../Shared/Contact/ContactMessage';
import { ContactService } from '../../../Shared/Contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _translate: TranslateService, private _title: Title, private _Contact: ContactService) {
    // if (_translate.currentLang === undefined)
    //   _translate.use('fa'); 
  }

  ngOnInit(): void {
    this._translate.get('Title.Contact').subscribe(t => {
      this._title.setTitle(t);
    });
    this._Contact.GetIP().subscribe((res: any) => {
      this.Message.IP = res['ip'];
    });
  }

  FormGroup: FormGroup = new FormGroup({
    FullName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(150)
    ]),
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(200)
    ]),
    Message: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(900)
    ]),
    IP: new FormControl('', [])
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

  Message: Message = new Message();
  MessageOutput: string = '';
  SubmitContact() {
    this._Contact.AddMessage(this.Message).subscribe((success) => {
      if (success.status === 200) {
        this.MessageOutput = 'پیام شما ارسال شد.';  
      }
      if (success.status === 204) {
        this.MessageOutput = 'پیام قبلی شما در حال بررسی می باشد.';
      }
      this.ResetForm();
    }, (error) => {

    });
  }
  ResetForm() {
    this.ShowFullNameError = false;
    this.ShowEmailError = false;
    this.ShowMessageError = false;
    this.Message = new Message();
  }
  ShowFullNameError: boolean = false;
  ShowEmailError: boolean = false;
  ShowMessageError: boolean = false;
}
