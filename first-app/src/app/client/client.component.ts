import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent  implements OnDestroy{
param: string;
private subscription: Subscription;

 constructor(private activatedRoute: ActivatedRoute){

   this.subscription = activatedRoute.queryParams.subscribe(
     (queryParam: any) => this.param = queryParam['analytics']
     );
 }

 ngOnDestroy(){
   this.subscription.unsubscribe();
 }

}
