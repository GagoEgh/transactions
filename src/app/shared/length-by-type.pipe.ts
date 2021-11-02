import { Pipe, PipeTransform } from '@angular/core';
import { Transation} from './interfaces';

@Pipe({
  name: 'lengthByType'
})
export class LengthByTypePipe implements PipeTransform {
transform(transations: Transation[]=[], type:string): number { 
    return   transations.filter(transation=>transation.type===type).length; 
  }
  
}
