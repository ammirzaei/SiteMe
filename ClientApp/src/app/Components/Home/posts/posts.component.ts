import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _translate: TranslateService, private _title: Title) {
    if (_translate.currentLang === undefined)
      _translate.use('fa');
  }

  ngOnInit(): void {
    this._translate.get('Title.Posts').subscribe(t => {
      this._title.setTitle(t);
    });
  }

}