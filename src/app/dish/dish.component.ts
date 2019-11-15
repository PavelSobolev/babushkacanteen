import { Component, OnInit, Input } from '@angular/core';
import { categoriesProperties } from '../categoriesProperties';
import { Categories } from '../categories';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { Properties } from '../properties';

@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
    order: Order;
    properties: Map<Categories, Properties> = categoriesProperties;

    @Input() dish;
    @Input() ingredients: string = "block";

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.orderService.getOrder().subscribe(x => this.order = x);
        window.scrollTo(0, 0);
    }

}
