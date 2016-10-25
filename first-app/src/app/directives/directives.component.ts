import { Component, OnInit } from '@angular/core';
import {} from '../highlight.directive';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

	private switch = true;
	onSwitch(){
		this.switch = !this.switch;
	}

}
