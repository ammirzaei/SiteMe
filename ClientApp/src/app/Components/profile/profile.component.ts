import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor(public _translate: TranslateService,private _title:Title) {
    if (_translate.currentLang === undefined)
      _translate.use('fa');
  }
  ngOnDestroy(): void {
    clearInterval(this.setIntervalTyping);
  }
  ngOnInit(): void {
    this._translate.get('Title.Profile').subscribe(t=>{
      this._title.setTitle(t);
    });
    this.Profile();
  }
  isShowProfile: boolean = false;
  typings: any;
  lengthTyping: number = 0;
  indexTyping: number = 0;

  Typing() {
    if (this.indexTyping === this.lengthTyping)
      this.indexTyping = 0;

    var show = document.getElementsByClassName('show');
    show[0].classList.remove('show');
    this.typings[this.indexTyping].classList.add('show');
    this.indexTyping++;
  }
  setIntervalTyping: any;
  Profile() {
    this.typings = document.querySelectorAll('.typing');
    this.lengthTyping = this.typings.length;
    this.setIntervalTyping = setInterval(() => {
      this.Typing();
    }, 2000);
  }
}
