import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dish } from '../dish';
import { ReadySet } from '../readyset';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { Categories } from '../categories';
import { Properties } from '../properties';
import { categoriesProperties } from '../categoriesProperties';
import { Subscription } from 'rxjs';
import { DishService } from '../dish.service';

@Component({
    selector: 'app-ready',
    templateUrl: './ready.component.html',
    styleUrls: ['./ready.component.scss']
})

export class ReadyComponent implements OnInit, OnDestroy {

    private dishesReceivedRef: Subscription = null;

    order: Order;
    ready = [];
    category = Categories;
    numCategories: number[] = [];
    properties: Map<Categories, Properties> = categoriesProperties;

    getDishOfCategory(cat: Categories, set: ReadySet): Dish[] {
        return set.dishes.filter(z => z.category === cat);
    }

    isDairyFree(set: Dish[]): boolean {
        return set.every(x => x.dairyFree);
    }

    contains(set: Dish[], what): boolean {
        return set.filter(x => x.ingredients.filter(y => y.includes(what)).length != 0).length != 0; //BeefFree - false
    }

    setOrder(set: ReadySet): void {
        this.ready.forEach(s => s.selected = false);
        set.selected = true;
        this.orderService.setOrder(set.dishes);
    }

    delOrder(set: ReadySet): void {
        this.ready.forEach(s => s.selected = false);
        set.selected = false;
        this.orderService.clearOrder();
    }

    constructor(private orderService: OrderService,
        private dishService: DishService) { }

    ngOnInit() {
        this.dishService.getReadySets().subscribe(x => this.ready = x);
        this.orderService.getOrder().subscribe(x => this.order = x);
        this.dishesReceivedRef = this.dishService.dishesReceived$.subscribe(() => this.ready = this.dishService.buildSets());

        for (let x in this.category) {
            if (!isNaN(Number(x))) {
                this.numCategories.push(Number(x));
            }
        }
        window.scrollTo(0, 0);
    }

    ngOnDestroy(): void {
        this.dishesReceivedRef.unsubscribe();
    }
}
