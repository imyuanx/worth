/**
 * Define the categories of goods and quantify their importance to our healthy lives.
 * I know everyone has their own opinion on this, but I'm going to try to be as objective as possible.
 * If you have scientific data, PR please, Thanks.
 */

// proportion: The healthy proportion in total consumption, with a maximum value of 100
// frequency: Frequency of use, with a maximum value of 100
// life: the life of similar products, the maximum value is 100

export default {
    electronic: {
        key: 0,
        proportion: 10,
        frequency: 60,
        life: 360 * 2,
    },
    clothes: {
        key: 1,
        proportion: 15,
        frequency: 70,
        life: 360,
    },
    necessities: {
        key: 2,
        proportion: 5,
        frequency: 80,
        life: 30,
    },
    entertainment: {
        key: 3,
        proportion: 5,
        frequency: 30,
        life: 3,
    },
    food: {
        key: 4,
        proportion: 25,
        frequency: 100,
        life: 1,
    },
    "other-important": {
        key: 5,
        proportion: 25,
        frequency: 30,
        life: 30,
    },
    "other-general": {
        key: 6,
        proportion: 15,
        frequency: 20,
        life: 30,
    },
}