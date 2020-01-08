import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

    transform(value: any, args?: any): any {
    if (!value) {return null; }
    if (!args) {return value; }

    args = args.toLowerCase();

    // tslint:disable-next-line:only-arrow-functions
    return value.filter(function(item: any) {
        return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
