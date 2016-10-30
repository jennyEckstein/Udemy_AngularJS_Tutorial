import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnDestroy{
	id: string;
	private subscription: Subscription;

	constructor(private router: Router, 
		private activatedRoute: ActivatedRoute){
		/*does not update unless reload the component*/
		/*this.id = activatedRoute.snapshot.params['id'];*/

		/*may create memory leak unless onDestroy is implemented*/
		this.subscription = activatedRoute.params.subscribe(
				(param: any) => this.id = param['id']
			);
	}
	onNavigate(){
		this.router.navigate(['/']);
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
 }
