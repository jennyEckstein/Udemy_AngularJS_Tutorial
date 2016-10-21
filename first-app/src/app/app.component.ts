import { Component } from '@angular/core';
import { OtherComponent, AnotherComponent } from './other';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: ['OtherComponent', 'AnotherComponent']
})
export class AppComponent {
  title = 'Hellow World!';
}
