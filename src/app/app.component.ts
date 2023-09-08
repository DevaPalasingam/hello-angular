import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{ title }}</h1>
    <app-world [message]="message"></app-world>
  `,
})
export class AppComponent {
  title = 'Hello Angular';
  hello = 'Hello';
}
