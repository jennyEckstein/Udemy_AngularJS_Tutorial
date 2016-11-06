import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent implements OnInit{

	registerForm: FormGroup;	

	constructor(private formBuilder: FormBuilder){}

	ngOnInit(){
		this.registerForm = this.formBuilder.group({
			username: ['', [Validators.required, Validators.maxLength(10)]],
			email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]],
			password: ['', Validators.required]
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
