import { Component, OnInit } from '@angular/core';
import { Dishes } from '../dishes';
import { Dish } from '../dish';
import { categoriesProperties } from '../categoriesProperties';
import { Categories } from '../categories';
import { Properties } from '../properties';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../dish.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    dishes: Dish[] = Dishes;
    category = Categories;
    numCategories: number[] = [];
    properties: Map<Categories, Properties> = categoriesProperties;
    cat: string;
    numCat: number;

    constructor(private route: ActivatedRoute, private dishService: DishService) { }

    ngOnInit() {
        this.dishService.getDishes().subscribe(x => this.dishes = x);
        // subscribe to notifications on URI parameters changes
        // params - array of new parameters (after /dishes/)
        this.route.params.subscribe(params => {
            // + casts an expression from string to number
            this.numCat = +params.category;
            this.cat = Categories[params.category];

            this.dishes = this.dishService.getDishByCategory(this.numCat);
        });

        for (let x in this.category) {
            if (!isNaN(Number(x))) {
                this.numCategories.push(Number(x));
            }
        }
    }

}
