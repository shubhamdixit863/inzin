import { Pipe, PipeTransform } from '@angular/core';

// not in use

@Pipe({
  name: 'errorvisual'
})
export class ErrorvisualPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.find(ele=>ele.type==args[0]).message;
  }

}
