import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value, keys: string, term: string): any {

    if (!term) return value;
    return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])))
  }

  // transform(items: any[], filterText: string): any {
  //   return items ? items.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1) : [];
  // }
}
