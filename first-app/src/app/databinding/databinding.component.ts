import { Component, OnInit } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component.ts';

@Component({
  selector: 'jenny-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  directives: [PropertyBindingComponent]
})
export class DatabindingComponent {
	stringInterpolation = "This is string interpolation"
	numberInterpolation = 2;

	onTest(){
		return true; 
	}
}
