import { Dish } from './dish';
import { Categories } from './categories';
import { categoriesProperties } from './categoriesProperties';

export class Order {
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

    constructor() {
        this.id = 0;
        this.date = new Date();
        this.soup = [];
        this.main = [];
        this.garnish = [];
        this.salad = [];
        this.dessert = [];
        this.isPaid = false;
        this.price = 79.99;

        this.customerName = "";
        this.customerPhone = "";
        this.customerAddress = "";
        this.deliveryDateTime = new Date();
    }
    getCount(cat: Categories): number {
        switch (cat) {
            case Categories.Soups:
                return this.soup.length;
            case Categories.Mains:
                return this.main.length;
            case Categories.Sides:
                return this.garnish.length;
            case Categories.Salads:
                return this.salad.length;
            case Categories.Desserts:
                return this.dessert.length;
        }
    }

    getCategoryArray(category: Categories): Dish[] {
        switch (category) {
            case Categories.Soups:
                return this.soup;
            case Categories.Mains:
                return this.main;
            case Categories.Sides:
                return this.garnish;
            case Categories.Salads:
                return this.salad;
            case Categories.Desserts:
                return this.dessert;
        }
    }

    addDish(dish: Dish): void {
        switch (dish.category) {
            case Categories.Soups:
                this.soup.push(dish);
                break;
            case Categories.Mains:
                this.main.push(dish);
                break;
            case Categories.Sides:
                this.garnish.push(dish);
                break;
            case Categories.Salads:
                this.salad.push(dish);
                break;
            case Categories.Desserts:
                this.dessert.push(dish);
        }
    }

    removeDish(dish: Dish): void {
        switch (dish.category) {
            case Categories.Soups:
                this.soup = this.soup.filter(x => x != dish);
                break;
            case Categories.Mains:
                this.main = this.main.filter(x => x != dish);
                break;
            case Categories.Sides:
                this.garnish = this.garnish.filter(x => x != dish);
                break;
            case Categories.Salads:
                this.salad = this.salad.filter(x => x != dish);
                break;
            case Categories.Desserts:
                this.dessert = this.dessert.filter(x => x != dish);
        }
    }

    inOrder(dish: Dish): boolean {
        var count: number = 0;
        switch (dish.category) {
            case Categories.Soups:
                count = this.soup.filter(x => x == dish).length;
                break;
            case Categories.Mains:
                count = this.main.filter(x => x == dish).length;
                break;
            case Categories.Sides:
                count = this.garnish.filter(x => x == dish).length;
                break;
            case Categories.Salads:
                count = this.salad.filter(x => x == dish).length;
                break;
            case Categories.Desserts:
                count = this.dessert.filter(x => x == dish).length;
        }
        return count > 0 ? true : false;
    }

    isComplete(): boolean {
        let result: boolean = true;
        for (let cat in Categories) {
            if (!isNaN(Number(cat))) {
                result = result &&
                    (this.getCategoryArray(+cat).length == categoriesProperties.get(+cat).count);
            }
        }
        return result;
    }

    isNotEmpty(): boolean {
        let result: boolean = false;
        for (let cat in Categories) {
            if (!isNaN(Number(cat))) {
                result = result ||
                    (this.getCategoryArray(+cat).length != 0);
            }
        }
        return result;
    }

}
