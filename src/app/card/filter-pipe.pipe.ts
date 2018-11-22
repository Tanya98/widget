import { Pipe, PipeTransform } from '@angular/core';
import { IInfo } from '../data';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(data: IInfo[], type: string): IInfo[] {
    if (type === 'hotel') {
      return data;
    }
    return data.filter((card) => {
      return card.type.toLowerCase().includes(type.toLowerCase());
    });
  }
}
