import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _translate: TranslateService) {
    _translate.addLangs(['fa', 'en']);
    _translate.setDefaultLang('fa');
    // const browserLang = _translate.getBrowserLang();
    //  _translate.use(browserLang.match(/fa|en/) ? browserLang : 'fa');
  }
  ngOnInit(): void {
    this.Audio();
    this.CheckTheme();
  }
  isActiveNav: boolean = false;
  conditionNav: string = '';

  CommandNav() {
    this.isActiveNav = !this.isActiveNav;
    if (this.isActiveNav) {
      document.querySelectorAll('.nav-item').forEach(function (item, index) {
        if (index !== 0) {
          var delayAnimate = index + '00';
          item.animate(
            [
              {
                opacity: 0,
                visibility: 'hidden'
              },
              {
                opacity: 1,
                visibility: 'visible'
              }
            ]
            ,
            {
              fill: "forwards",
              easing: 'ease-in',
              duration: 400,
              delay: +delayAnimate
            }
          );
        } else {
          item.animate(
            [
              {
                left: 0
              }
              ,
              {
                left: '8px'
              }
            ]
            ,
            {
              duration: 200,
              delay: 0
            }
          );
        }
      });
    }
    else {
      var length = document.querySelectorAll('.nav-item').length;
      document.querySelectorAll('.nav-item').forEach(function (item, index) {
        if (index != 0) {
          var delayAnimate = (length - index) + '00';
          item.animate(
            [
              {
                opacity: 1,
                visibility: 'visible'
              },
              {
                opacity: 0,
                visibility: 'hidden'
              }
            ]
            ,
            {
              fill: "forwards",
              easing: 'ease-in',
              duration: 400,
              delay: +delayAnimate
            }
          );
        } else {
          item.animate(
            [
              {
                transform: 'scale(1)'
              }
              , {
                transform: 'scale(.9)'
              }
            ]
            ,
            {
              duration: 200,
              easing: 'ease-in'
            }
          );
        }
      });
    }
  }
  isPlayMusic: boolean = false;
  audio = new Audio();
  Audio() {
    this.audio.src = "../../../assets/music/audio.mp3";
    this.audio.load();
    this.audio.addEventListener('pause', () => {
      this.isPlayMusic = false;
      localStorage.setItem('Music', 'Pause');
    });
    this.audio.addEventListener('play', () => {
      this.isPlayMusic = true;
      localStorage.setItem('Music', 'Play');
    });
    if (localStorage.getItem('Music')) {
      var localMusic = localStorage.getItem('Music');
      if (localMusic === 'Play') {
        this.audio.play();
        this.isPlayMusic = true;
      }
    } else {
      if (this.isPlayMusic)
        this.audio.play();
    }
  }
  CommandMusic() {
    this.isPlayMusic = !this.isPlayMusic;
    if (this.isPlayMusic) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
  isDarkTheme: boolean = true;
  ChangeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    this.SetTheme();
  }
  SetTheme() {
    if (this.isDarkTheme)
      document.getElementsByTagName('body')[0].classList.remove('light');
    else
      document.getElementsByTagName('body')[0].classList.add('light');
  }
  CheckTheme() {
    if (localStorage.getItem('theme')) {
      let theme = localStorage.getItem('theme');
      theme === 'dark' ? this.isDarkTheme = true : this.isDarkTheme = false;
      this.SetTheme();
    }
  }
  SelectLang: string = 'fa';
  ChangeSelectLang() {
    if (this.SelectLang === "fa") {
      document.body.classList.add('en');
      this.SelectLang = 'en';
    }
    else {
      document.body.classList.remove('en');
      this.SelectLang = 'fa';
    }
    this._translate.use(this.SelectLang);
  }
  isShowOptions: boolean = false;
  ChangeOptions() {
    this.isShowOptions = !this.isShowOptions;
    let options = document.querySelectorAll('.option');
    let option_mdi = document.getElementById('option-mdi');
    if (this.isShowOptions) {
      setTimeout(() => {
        option_mdi?.classList.add('mdi-close-circle-outline');
        option_mdi?.classList.remove('mdi-settings-outline');
      }, 400);
      options.forEach(function (item, index) {
        let delay = (index + 3) + "00";
        item.animate([
          {
            opacity: 0,
            visibility: 'hidden'
          },
          {
            opacity: 1,
            visibility: 'visible'
          }
        ],
          {
            duration: 200,
            easing: 'ease-in',
            fill: 'forwards',
            delay: +delay
          });
      });
    }
    else {
      setTimeout(() => {
        option_mdi?.classList.add('mdi-settings-outline');
        option_mdi?.classList.remove('mdi-close-circle-outline');
      }, 400);
      options.forEach(function (item, index) {
        let delay = ((options.length - index) + 3) + "00";
        item.animate([
          {
            opacity: 1,
            visibility: 'visible'
          },
          {
            opacity: 0,
            visibility: 'hidden'
          }
        ],
          {
            duration: 200,
            easing: 'ease-in',
            fill: 'forwards',
            delay: +delay
          });
      });
    }

  }
}
