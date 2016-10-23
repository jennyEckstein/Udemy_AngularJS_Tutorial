import { Component, OnInit } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@Component({
  selector: 'jenny-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
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
