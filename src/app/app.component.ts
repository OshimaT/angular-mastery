import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: String;
  values: String = '';
  text_value: String = '';
  title = 'app';

  onClickMe() {
    this.message = 'You have clicked Me!!!';
  }

  onKey(event: any) {
    this.values  += event.target.value + '|';
  }

  onEnter(value: String) {
    this.text_value = value;
  }
}
