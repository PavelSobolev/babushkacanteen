import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Categories } from '../categories';
import { Dish } from '../dish';
import { Properties } from '../properties';
import { categoriesProperties } from '../categoriesProperties';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pop-order',
    templateUrl: './pop-order.component.html',
    styleUrls: ['./pop-order.component.scss']
})
export class PopOrderComponent implements OnInit {

    order: Order;
    category = Categories;
    numCategories: number[] = [];

    emptyDish: Dish = {
        id: 0,
        name: "none",
        pict: "../../assets/img/empty.png",
        category: Categories.Soups,
        calories: 0,
        dairyFree: true,
        selected: true,
        ingredients: [],
        top: false,
    }
    properties: Map<Categories, Properties> = categoriesProperties;

    constructor(private orderService: OrderService) { }

    getOrder(): void {
        this.orderService.getOrder()
            .subscribe(order => this.order = order);
    }

    getDishesInCategory(category: Categories): Dish[] {
        let count = this.order.getCategoryArray(category).length;
        let maxcount = this.properties.get(category).count;
        if (maxcount == 2) {
            switch (count) {
                case 0: return [this.emptyDish, this.emptyDish];
                case 1: return [this.order.getCategoryArray(category)[0], this.emptyDish];
                case 2: return [this.order.getCategoryArray(category)[0], this.order.getCategoryArray(category)[1]];
            }
        } else {
            switch (count) {
                case 0: return [this.emptyDish];
                case 1: return [this.order.getCategoryArray(category)[0]];
            }
        }
    }

    movePop(): void {
        let obj = document.getElementsByClassName('pop')[0];
        obj.classList.toggle("pop-show");
    }

    ngOnInit() {
        this.getOrder()

        for (let x in this.category) {
            if (!isNaN(Number(x))) {
                this.numCategories.push(Number(x));
            }
        }
    }
}
