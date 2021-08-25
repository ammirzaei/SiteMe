import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public _translate: TranslateService, private _title: Title) {
    if (_translate.currentLang === undefined)
      _translate.use('fa');
  }

  ngOnInit(): void {
    this._translate.get('Title.Skills').subscribe(t => {
      this._title.setTitle(t);
    });
    this.Skills();
  }
  Skills() {
    var skills = document.querySelectorAll('.skill');
    var skillLength = skills.length;
    setTimeout(function () {
      document.getElementsByClassName('content')[0].addEventListener('scroll', SkillShow);
      function SkillShow() {
        skills.forEach(function (item, index) {
          if (!item.classList.contains('show')) {
            var skill = <HTMLElement>item;
            if ((document.getElementsByClassName('content')[0].scrollTop + window.innerHeight) >= skill.offsetTop) {
              if (index % 2 === 0) {
                /// this skill even
                item.classList.add('show-right');
              } else {
                /// this skill odd
                item.classList.add('show-left');
              }
              if ((skillLength - 1) === index) {
                document.getElementsByClassName('content')[0].removeEventListener('scroll', SkillShow);
              }
            }
          }
        });
      }
      SkillShow();
    }, 700)
  }
}
