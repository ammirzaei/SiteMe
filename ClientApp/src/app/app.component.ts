import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    window.addEventListener('load', () => {
      document.getElementsByClassName('loader')[0].classList.add('hide');
    });
  }
}
