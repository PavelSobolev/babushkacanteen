import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { Dish } from '../dish';
import { Dishes } from '../dishes';

@Component({
    selector: 'app-popular',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
    categories = Categories;
    numCategories: number[] = [];
    showIngredients: string = "none";

    constructor() { }

    getTop3inCategory(num: number): Dish[] {
        return Dishes.filter(dish => dish.category == num && dish.top);
    }

    ngOnInit() {
        for (let x in this.categories) {
            if (!isNaN(Number(x))) {
                this.numCategories.push(Number(x));
            }
        }
    }
}
