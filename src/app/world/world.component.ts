import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
  template: `
    <h2>{{ message }} {{ world1 }}</h2>
    <h3>{{ message }} {{ world2 }}</h3>
    <h4>{{ message }} {{ world3 }}</h4>
  `,
})
export class WorldComponent {
  @Input() message: string = ''; // Provide a default value

  world1 = 'Tatooine';
  world2 = 'Titan';
  world3 = 'Earth';
}
