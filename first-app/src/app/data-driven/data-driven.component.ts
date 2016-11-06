import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent implements OnInit{

	registerForm: FormGroup;

	constructor(private formBuilder: FormBuilder){}

	ngOnInit(){
		this.registerForm = this.formBuilder.group({
			username: 'username',
			email: 'email',
			password: 'password'
		});
	}

	onSubmit(){
		console.log(this.registerForm);
	}
	
	/*registerForm = new FormGroup({
		username: new FormControl(),
		email: new FormControl(),
		password: new FormControl()
	});*/


 
}
