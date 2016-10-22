import { Component } from '@angular/core';
import { DatabindingComponent } from '.\databinding\databinding.component.ts';



@Component({
  selector: 'app-root',
  template: `
  		<h1> Root Component </h1>
  		<jenny-databinding></jenny-databinding>
  `
})
export class AppComponent {
}
