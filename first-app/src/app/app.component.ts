import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';
import { LifecycleComponent } from './lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  template: `
       <h1>Directives</h1>
       <app-comp-a></app-comp-a>
       <app-comp-b></app-comp-b>
        
  		<!--
      <app-directives></app-directives>
      <h1> Root Component </h1>
  		<jenny-databinding></jenny-databinding>
  		<jenny-lifecycle *ngIf="!delete" [bindable]="boundValue">
  			<p>{{test}}</p>
  		</jenny-lifecycle>
  		<button (click)="delete = true"> Click to Delete </button>
  		<button (click)="test = 'Changed Value'"> Click to Change </button>
  		<button (click)="boundValue = '2000'"> Click to Change Binding </button>
      -->
  `
})
export class AppComponent {
	delete = false;
	test = 'Starting Value';
	boundValue = 1000;
}
