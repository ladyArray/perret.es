import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], props: string[], pattern: string): any {
    return list.filter((item) =>
      props.some((prop) => item[prop]?.search(new RegExp(pattern, 'i')) !== -1)
    );
  }
}
