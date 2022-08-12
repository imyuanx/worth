/**
 * Detailed factors affecting the recommended index.
 */

// LESS_CATEGORY_AVERAGE_PRICE: Whether the price is less than the average price of the monthly expenditure of the same item, importance: 35%.
// LESS_CATEGORT_TOTAL_PRICE: Is the price less than all the monthly expenses of the same project, importance: 20%.
// LESS_MOTH_DISPOSABLE_PRICE: Whether the price is less than the monthly disposable amount, importance: 35%.
// USE_FREQUENCY: Frequency of use, importance: 35%.
// GOODS_LIFE: Commodity life, importance: 5%.

import getPercentage from "./getPercentage";

const LESS_CATEGORY_AVERAGE_PRICE = getPercentage(35);
const LESS_CATEGORT_TOTAL_PRICE = getPercentage(20);
const LESS_MOTH_DISPOSABLE_PRICE = getPercentage(35);
const USE_FREQUENCY = getPercentage(5);
const GOODS_LIFE = getPercentage(5);

export { LESS_CATEGORY_AVERAGE_PRICE };
export { LESS_CATEGORT_TOTAL_PRICE };
export { LESS_MOTH_DISPOSABLE_PRICE };
export { USE_FREQUENCY };
export { GOODS_LIFE };