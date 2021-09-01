import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _translate: TranslateService, private _title: Title) {
    if (_translate.currentLang === undefined)
      _translate.use('fa');
  }

  ngOnInit(): void {
    this._translate.get('Title.About').subscribe(t => {
      this._title.setTitle(t);
    });
    this.Fav();
  }
  Fav() {
    var favList = document.querySelectorAll('.fav');
    var favLength = favList.length;
    setTimeout(() => {
      document.getElementsByClassName('content-home')[0].addEventListener('scroll', FavShow);
      function FavShow() {
        favList.forEach(function (item, index) {
          if (!item.classList.contains('show')) {
            var fav = <HTMLElement>item;
            if ((document.getElementsByClassName('content-home')[0].scrollTop + window.innerHeight) >= fav.offsetTop) {
              item.classList.add('show');
              var delayAnimate = index + '00';
              item.animate(
                [
                  {
                    opacity: 0,
                    top: '10rem'
                  },
                  {
                    opacity: 1,
                    top: 0
                  }
                ], {
                delay: +delayAnimate,
                fill: 'forwards',
                easing : 'ease-in',
                duration: 1000 + +delayAnimate
              });
              if ((favLength - 1) === index) {
                document.getElementsByClassName('content-home')[0].removeEventListener('scroll', FavShow);
              }
            }
          }
        });
      }
      FavShow();
    }, 700);
  }
}
