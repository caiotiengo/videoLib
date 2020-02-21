import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
declare var _: any; // lodash, not strictly typed

@Pipe({
  name: 'unique',
  pure: false

})
export class UniquePipe implements PipeTransform {

  transform(value: any): any {
		 if(value!== undefined && value!== null){
                return _.uniqBy(value, 'division_description');
            }
            return value;
     }       
}
