import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure: false
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
   	if(value.length === 0){
   		return value;
   	}
   	let resultArray = [];
   	for(let item of value){
   		if(item.match('^.*' + args[0] + '.*$')){
   			resultArray.push(item);
   		}
   	}
   	return resultArray;
  }

}
