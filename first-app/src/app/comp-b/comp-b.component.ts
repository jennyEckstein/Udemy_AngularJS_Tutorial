import { Component} from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  providers: [LogService]
})
export class CompBComponent{
	value = '';
	constructor(private logService: LogService){}

	onLog(value:string){
		this.logService.writeToLog(value);
	}
}
