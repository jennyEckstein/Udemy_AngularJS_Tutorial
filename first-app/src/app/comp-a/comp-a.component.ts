import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  providers: [LogService]
})
export class CompAComponent{
	value = '';
  constructor(private logService: LogService) {
  	
   }

   onLog(value:string){
   	this.logService.writeToLog(value);
   }

}
