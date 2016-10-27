import { Component } from '@angular/core';
import { LogService } from '../log.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  providers: [LogService, DataService]
})
export class CompAComponent{
	value = '';
	items: string[] = [];
  constructor(
  	private logService: LogService,
  	private dataService: DataService) {
  	
   }

   onLog(value:string){
   	this.logService.writeToLog(value);
   }

   onStore(value: string){
   	this.dataService.addData(value);
   }

   onGet(value: string){
   		this.items = this.dataService.getData();
   }

}
