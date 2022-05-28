import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], filterText: string): any {
    return items ? items.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
