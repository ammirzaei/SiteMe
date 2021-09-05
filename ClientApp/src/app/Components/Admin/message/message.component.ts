import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AllMessages } from 'src/app/Shared/Contact/ContactMessage';
import { ContactService } from './../../../Shared/Contact/contact.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private _ContactService: ContactService) { }

  ngOnInit(): void {
    this._ContactService.GetAllMessages().subscribe((m: any) => this.AllMessages = m);
  }
  AllMessages: AllMessages[] = [];

  @ViewChild('Message') Message!: ElementRef;
  ShowMessage(index: number) {
    var message = this.AllMessages[index];
    this.Message.nativeElement.innerHTML = message.message;
    document.getElementsByClassName('showMessage')[0].classList.add('show');
    document.getElementsByClassName('messageBack')[0].classList.add('show');
    if (message.isShow === false) {
      this._ContactService.ChangeShowMessage(message.contactID).subscribe((success) => {
        this.AllMessages[index].isShow = true;
      });
    }
  }
  HideMessage() {
    document.getElementsByClassName('showMessage')[0].classList.remove('show');
    document.getElementsByClassName('messageBack')[0].classList.remove('show');
  }
  DeleteMessage(index: number) {
    if (confirm('آیا این پیام حذف شود؟')) {
      var message = this.AllMessages[index];
      this._ContactService.DeleteMessage(message.contactID).subscribe((success) => {
        this.AllMessages.splice(index, 1);
      });
    }

  }
}
