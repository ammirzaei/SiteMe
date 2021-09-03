import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  constructor(private _translate: TranslateService, private _title: Title) {
    if (_translate.currentLang === undefined)
      _translate.use('fa');
  }

  ngOnInit(): void {
    this._translate.get('Title.Samples').subscribe(t => {
      this._title.setTitle(t);
    });
  }

  CloseDetail(detail: Element) {
    detail.classList.remove('show');
  }
  ShowDetail(detail: Element) {
    detail.classList.add('show');
  }

}
