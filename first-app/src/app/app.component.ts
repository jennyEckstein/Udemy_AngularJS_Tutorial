import { Component } from '@angular/core';
import {other} from '.\other';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: ['OtherComponent']
})
export class AppComponent {
  title = 'Hellow World!';
}
