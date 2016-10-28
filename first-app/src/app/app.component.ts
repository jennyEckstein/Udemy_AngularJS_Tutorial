import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';
import { LifecycleComponent } from './lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { routing } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
	delete = false;
	test = 'Starting Value';
	boundValue = 1000;
}
