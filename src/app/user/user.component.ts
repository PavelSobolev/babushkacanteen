import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormControl, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Order } from '../order';
import { Router } from '@angular/router';
import { sendMail } from '../mailer';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

    order: Order;
    dates: Date[] = [];

    checkoutForm = new FormGroup({
        customerName: new FormControl('', [
            Validators.required,
            Validators.minLength(4)]),
        customerPhone: new FormControl('', [
            Validators.required
            //,
            // Validators.pattern('[0-9]{9,10}')
        ]),
        customerEmail: new FormControl('', [
            Validators.required,
            Validators.email]),
        customerAddress: new FormControl('', [Validators.required]),
        customerSuburb: new FormControl('', [Validators.required]),
        deliveryDateTime: new FormControl('', [Validators.required])
    });

    checked1: string = "none";
    checked2: string = "block";

    forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? { 'forbiddenName': { value: control.value } } : null;
        }
    }

    dateFormat(date: Date): string {
        let y: number = date.getFullYear();

        let m: number = date.getMonth() + 1;
        let sm: string = m < 10 ? `0${m}` : `${m}`;

        let d: number = date.getDate();
        let sd: string = d < 10 ? `0${d}` : `${d}`;

        return `${y}-${sm}-${sd}`;
    }

    minDate(): string {
        var result = (new Date());

        if (result.getHours() <= 12) {
            result.setDate(result.getDate() + 1);
        } else {
            result.setDate(result.getDate() + 2);
        }

        return this.dateFormat(result);
    }

    minimumDate(): Date {
        var result = (new Date());

        if (result.getHours() <= 12) {
            result.setDate(result.getDate() + 1);
        } else {
            result.setDate(result.getDate() + 2);
        }

        return result;
    }

    maxDate(): string {
        var result = (new Date());
        result.setDate(result.getDate() + 7);
        return this.dateFormat(result);
    }

    radioClick(show1: string, show2: string): void {
        this.checked1 = show1;
        this.checked2 = show2;
    }

    setDates(): void {
        let cDate: Date = this.minimumDate();
        for (let i = 0; i <= 7; i++) {
            let dt: Date = new Date(cDate);
            this.dates.push(dt);
            cDate.setDate(cDate.getDate() + 1);
            dt = null;
        }
    }

    constructor(
        private orderServce: OrderService, private router: Router) {

        this.orderServce.getOrder().subscribe(ord => this.order = ord);

        this.setDates();
    }

    onSubmit() {
        if (this.checkoutForm.status === "VALID" && this.order.isComplete()) {
            sendMail(this.order, this.checkoutForm);
            this.router.navigate(['/final']);
        }
    }


    ngOnInit() {
        window.scrollTo(0, 0);
    }

} 
