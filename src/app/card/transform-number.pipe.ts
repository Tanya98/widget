import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformNumber'
})

export class TransformNumberPipe implements PipeTransform {

  transform(tel: number): any {
    const str: string = tel + '';
    const a: string = str.slice(0, 1);
    const b: string = str.slice(1, 4);
    const c: string = str.slice(4, 7);
    const d: string = str.slice(7, 10);
    const result = 'Tel: +' + a + ' ' + b + ' ' + c + ' ' + d;
    return result;
  }
}
