import { Dish } from "./dish";
import { Dishes } from './dishes';

export function getDish(id: number): Dish {
    let result: Dish = Dishes.filter(x => x.id == id)[0];
    return result;
}
