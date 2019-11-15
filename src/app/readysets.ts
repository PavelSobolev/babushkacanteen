import { ReadySet } from './readyset';
import { getDish } from './getdish';

export let readySets: ReadySet[] = [
    {
        name: "Set 1",
        dishes: [
            getDish(102), getDish(103),
            getDish(205), getDish(207),
            getDish(302), getDish(303),
            getDish(402), getDish(506)
        ],
        selected: false
    },
    {
        name: "Set 2",
        dishes:
            [
                getDish(101), getDish(107),
                getDish(209), getDish(202),
                getDish(302), getDish(305),
                getDish(402), getDish(504)
            ],
        selected: false
    },
    {
        name: "Set 3",
        dishes: [
            getDish(109), getDish(105),
            getDish(201), getDish(203),
            getDish(301), getDish(306),
            getDish(406), getDish(505)
        ],
        selected: false
    },
    {
        name: "Set 4",
        dishes: [
            getDish(102), getDish(108),
            getDish(205), getDish(208),
            getDish(303), getDish(304),
            getDish(404), getDish(506)
        ],
        selected: false
    }
];
