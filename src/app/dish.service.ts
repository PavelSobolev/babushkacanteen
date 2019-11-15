import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { ReadySet } from './readyset';
import { Subject, Observable, of } from 'rxjs';

declare let firebase: any; // = require("firebase");

@Injectable({
    providedIn: 'root'
})
export class DishService {

    // is databse has been initilized
    dbInitDone: boolean = false;

    // notificantion about event when data fetching completed
    private dishChangeEvent = new Subject<void>();
    public dishesReceived$ = this.dishChangeEvent.asObservable();

    firebaseConfig = {
        // ...
    };

    dishesDb: any = null;
    dishes: Dish[] = [];
    readySets: ReadySet[] = [];

    initDatabase() {
        // Initialize Firebase firestore
        firebase.initializeApp(this.firebaseConfig);
        this.dishesDb = firebase.firestore();
        this.dbInitDone = true;
    }

    constructor() {
        if (!this.dbInitDone) this.initDatabase();
        this.readDb();
    }

    readDb(): void {
        this.dishes = [];
        this.dishesDb.collection("Dishes").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.dishes.push(doc.data());
                this.dishesDb.collection("Dishes").doc(doc.id).onSnapshot(
                    (newdoc) => {
                        this.addOrSetNewDish(newdoc.data().id, newdoc.data());
                        this.readySets = this.buildSets();
                    });
            });
            this.dishChangeEvent.next();
        });
    }

    getDish(id: number): Dish {
        return this.dishes.filter(x => x.id == id)[0];
    }

    // if dish exists it is replaced with new data
    // if dish with specified ID does not exist then it is inserted 
    addOrSetNewDish(id: number, newdata: Dish): void {
        if (this.dishes.filter(val => val.id == id).length == 0) {
            this.dishes.push(newdata);
        }
        else {
            this.dishes[this.dishes.findIndex(val => val.id == id)] = newdata;
        }
    }

    getDishByCategory(category: number): Dish[] {
        return this.dishes.filter(dish => dish.category == category);
    }

    getDishes(): Observable<Dish[]> {
        return of(this.dishes);
    }

    getReadySets(): Observable<ReadySet[]> {
        return of(this.readySets);
    }

    ngOnInit(): void {

    }

    // converts array of dishes' IDs to array of dishes
    buildDishSet(items: number[]): Dish[] {
        return items.map(id => this.getDish(id));
    }

    buildSets(): ReadySet[] {
        return [
            {
                name: "Set 1",
                dishes: this.buildDishSet([102, 103, 205, 207, 302, 303, 402, 506]),
                selected: false
            },
            {
                name: "Set 2",
                dishes: this.buildDishSet([101, 107, 209, 202, 302, 305, 402, 504]),
                selected: false
            },
            {
                name: "Set 3",
                dishes: this.buildDishSet([109, 105, 201, 203, 301, 306, 406, 505]),
                selected: false
            },
            {
                name: "Set 4",
                dishes: this.buildDishSet([102, 108, 205, 208, 303, 304, 404, 506]),
                selected: false
            }
        ];
    }
}
