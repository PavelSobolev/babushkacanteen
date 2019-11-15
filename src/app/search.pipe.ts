import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(dishes, value): any {
        console.log(value);
        return dishes.filter(dish =>
            value.length == 0 ||
            dish.ingredients.filter(x => x.includes(value)).length > 0
            || dish.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }
}
