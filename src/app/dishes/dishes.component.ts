import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Dish } from '../dish';
import { categoriesProperties } from '../categoriesProperties'
import { Categories } from '../categories';
import { ActivatedRoute } from '@angular/router';
import { Properties } from '../properties';
import { Subscription } from 'rxjs';
import { DishService } from '../dish.service';

@Component({
    selector: 'app-dishes',
    templateUrl: './dishes.component.html',
    styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit, OnDestroy {

    private dishesReceivedRef: Subscription = null;

    @Input() dishes: Dish[] = [];
    properties: Map<Categories, Properties> = categoriesProperties;
    cat: string;
    searchText: string = '';
    showIngredients: string = "block";

    constructor(
        private route: ActivatedRoute,
        private dishService: DishService) {
    }

    searchDish($event) {
        this.searchText = $event;
    }

    ngOnInit() {
        this.route.params.subscribe(async params => {

            const category = +params.category;
            this.cat = Categories[params.category];

            this.dishService.getDishes().subscribe(val => this.dishes = val);
            this.dishesReceivedRef = this.dishService.dishesReceived$.subscribe(() => this.dishes = this.dishService.getDishByCategory(category));

            this.dishes = this.dishService.getDishByCategory(category);
        });
        window.scrollTo(0, 0);
    }

    ngOnDestroy(): void {
        this.dishesReceivedRef.unsubscribe();
    }
}
