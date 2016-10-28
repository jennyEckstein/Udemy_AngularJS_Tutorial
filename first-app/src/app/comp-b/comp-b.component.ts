import { Component, OnInit} from '@angular/core';
import { LogService } from '../log.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html'
})
export class CompBComponent implements OnInit{
	value = '';
	items:string[] = [];
	constructor(
		private logService: LogService, 
		private dataService: DataService){}

	onLog(value:string){
		this.logService.writeToLog(value);
	}

	onStore(value:string){
		this.dataService.addData(value);
	}

	onGet(values: string){
		this.items = this.dataService.getData();
	}

	ngOnInit(){
		this.dataService.pushedData.subscribe(
				data => this.value = data
			);
		
	}
}
