import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`
	  .pipes{
	  	margin:32px;
	  	padding: 32px;
	  }
  `]
})
export class AppComponent{
	myValue = 'lowercase'; 
	myDate= new Date(2016, 5, 24); 
}
 