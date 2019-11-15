import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable, of } from 'rxjs';
import { Dish } from './dish';
import { Categories } from './categories';
import { readySets } from './readysets';
import { Properties } from './properties';
import { categoriesProperties } from './categoriesProperties';
import { DishService } from './dish.service';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    order: Order = new Order();
    category = Categories;
    ready = [];
    categoriesProps: Map<Categories, Properties> = categoriesProperties;

    constructor(private dishService: DishService) {
        this.dishService.getReadySets().subscribe(rdset => this.ready = rdset);
    }

    getOrder(): Observable<Order> {
        return of(this.order);
    }

    addDish(dish: Dish): void {
        this.order.addDish(dish);
    }

    removeDish(dish: Dish): void {
        this.order.removeDish(dish)
    }

    inOrder(dish: Dish): boolean {
        return this.order.inOrder(dish);
    }

    setOrder(dishes: Dish[]): void {
        this.clearOrder();
        dishes.forEach(dish => {
            dish.selected = true;
            this.order.addDish(dish);
        });
    }

    deselect() {
        for (let x in this.category) {
            if (!isNaN(Number(x))) {
                this.order.getCategoryArray(+x).forEach(dish => dish.selected = false);
            }
        }
    }

    clearOrder(): void {
        this.deselect();
        this.order.soup = [];
        this.order.main = [];
        this.order.salad = [];
        this.order.garnish = [];
        this.order.dessert = [];
    }

    cleanSets(): void {
        this.ready.forEach(s => s.selected = false);
    }

    orderCountdown(): string {
        // how many dishes left to complete the order
        let max = 0;
        let inOrder = 0;
        for (let x in this.category) {
            if (!isNaN(Number(x))) {
                max += this.categoriesProps.get(+x).count;
                inOrder += this.order.getCategoryArray(+x).length;
            }
        }

        return `${max - inOrder}`;
    }
}
