import { Categories } from './categories';
import { Properties } from './properties';

export let categoriesProperties: Map<Categories, Properties> = new Map([
    [Categories.Soups, { color: '#c9a8f7', count: 2 }],
    [Categories.Mains, { color: '#f7f3ad', count: 2 }],
    [Categories.Sides, { color: '#b3f9b3', count: 2 }],
    [Categories.Salads, { color: '#FFC0CB', count: 1 }],
    [Categories.Desserts, { color: '#a0e8f7', count: 1 }],
]);
