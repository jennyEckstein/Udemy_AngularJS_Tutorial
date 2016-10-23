import { Component, OnInit } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component.ts';
import { EventBindingComponent } from './event-binding.component.ts';
import { TwoWayBindingComponent } from './two-way-binding.component.ts';

@Component({
  selector: 'jenny-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  directives: [PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent]
})
export class DatabindingComponent {
	stringInterpolation = "This is string interpolation"
	numberInterpolation = 2;

	onTest(){
		return true; 
	}

	onCli(val: string){
		alert(val + " watherv");
	}
}
