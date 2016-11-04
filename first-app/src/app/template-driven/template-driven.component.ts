import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles:[`
  	.ng-invalid{
  		border: 1px solid red;
  	}
  `]
})
export class TemplateDrivenComponent {
	user = {
		username: 'Jenny',
		email:'jenny.j.eckstein@gmail.com',
		password: 'password',
		gender: 'Female'
	}

	gender = ['Male', 'Female'];

	onSubmit(form: NgForm){
		console.log(form.value);
	}
}
