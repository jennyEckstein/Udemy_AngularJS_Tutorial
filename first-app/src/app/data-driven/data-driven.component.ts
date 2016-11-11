import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent{

	registerForm: FormGroup;	
	sex = ['male', 'female'];

	constructor(private formBuilder: FormBuilder){
		this.registerForm = this.formBuilder.group({
			username: ['', [Validators.required, this.exampleValidator, Validators.maxLength(10)]],
			email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]],
			password: ['', Validators.required],
			gender: "",
			hobbies: formBuilder.array([
					['Cooking', Validators.required, this.asyncExampleValidator]
				])
		});

		this.registerForm.valueChanges.subscribe(
				(data: any) => console.log(data)
			);

		this.registerForm.statusChanges.subscribe(
				(data: any) => console.log(data)
			);
	}


	onSubmit(){
		console.log(this.registerForm);
	}
	
	onAddHobby(){
		(<FormArray>this.registerForm.get('hobbies')).push(new FormControl('', Validators.required, this.asyncExampleValidator));
	}

	exampleValidator(control: FormControl): {[s: string]: boolean}{
		if(control.value === 'Example'){
			return {example: true};
		}
		return null;
	}

	asyncExampleValidator(control: FormControl): Promise<any> | Observable<any>{
		const promise = new Promise<any>(
				(resolve, reject) => {
					setTimeout(() => {
						if(control.value === 'Example'){
							resolve({'invalid': true})
						}else{
							resolve(null);
						}
					}, 1500);
				}
			);
		return promise;
	}

	/*registerForm = new FormGroup({
		username: new FormControl(),
		email: new FormControl(),
		password: new FormControl()
	});*/ 
}
