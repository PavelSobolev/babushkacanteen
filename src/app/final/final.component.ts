import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { Dish } from '../dish';
import { Router } from '@angular/router';

@Component({
    selector: 'app-final',
    templateUrl: './final.component.html',
    styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {
    order: Order;
    id: number;
    date: Date;
    soup: Dish[];
    main: Dish[];
    garnish: Dish[];
    salad: Dish[];
    dessert: Dish[];
    isPaid: boolean;
    price: number;

    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerAddress: string;
    customerSuburb: string;
    deliveryDateTime: Date;

    isComplete: boolean = false;

    constructor(private orderService: OrderService, private router: Router) { }

    copyOrder(): void {
        this.id = this.order.id;
        this.date = this.order.date;
        this.soup = this.order.soup;
        this.main = this.order.main;
        this.garnish = this.order.garnish;
        this.salad = this.order.salad;
        this.dessert = this.order.dessert;
        this.isPaid = this.order.isPaid;
        this.price = this.order.price;

        this.customerName = this.order.customerName;
        this.customerEmail = this.order.customerEmail;
        this.customerPhone = this.order.customerPhone;
        this.customerAddress = this.order.customerAddress;
        this.customerSuburb = this.order.customerSuburb;
        this.deliveryDateTime = this.order.deliveryDateTime;

        this.isComplete = this.order.isComplete()
    }

    ngOnInit() {
        this.orderService.getOrder().subscribe(ord => this.order = ord);
        this.copyOrder();
        window.scrollTo(0, 0);
        this.orderService.clearOrder();
        this.orderService.cleanSets();
    }
}
