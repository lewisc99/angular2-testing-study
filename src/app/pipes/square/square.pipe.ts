import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarePipe'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (null !== value && !isNaN(value))
    {
      return value * value;
    }
    else
    {
      return "not a number";
    }

  }

}
