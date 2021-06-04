import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myVar = 'moshe6';
  myArr = [1, 2, 3];

  changeVar() {
    this.myVar += 'haim'
  }
}
