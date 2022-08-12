import {
    getIsLessCategoryAveragePriceIndex,
    getIsLessCategoryTotalPriceIndex,
    getIsLessAmountIndex,
    getIsHighFrequencyIndex,
    getIsLongLifeIndex,
} from "./getFactorsIndex";
import {
    LESS_CATEGORY_AVERAGE_PRICE,
    LESS_CATEGORT_TOTAL_PRICE,
    LESS_MOTH_DISPOSABLE_PRICE,
    USE_FREQUENCY,
    GOODS_LIFE,
} from "./factors";

function getRecommendedIndexByIndex(index, iIndex) {
    return (index * iIndex).toFixed(2);
}

function getRecommendIndex(goodsPrice, cateAveragePrice, cateTotalPrice, amount, goodsType) {
    let a35Index = getIsLessCategoryAveragePriceIndex(goodsPrice, cateAveragePrice);
    let b25Index = getIsLessCategoryTotalPriceIndex(goodsPrice, cateTotalPrice);
    let c35Index = getIsLessAmountIndex(goodsPrice, amount);
    let d5Index = getIsHighFrequencyIndex(goodsType);
    let e5Index = getIsLongLifeIndex(goodsType);

    a35Index = getRecommendedIndexByIndex(a35Index, LESS_CATEGORY_AVERAGE_PRICE);
    b25Index = getRecommendedIndexByIndex(b25Index, LESS_CATEGORT_TOTAL_PRICE);
    c35Index = getRecommendedIndexByIndex(c35Index, LESS_MOTH_DISPOSABLE_PRICE);
    d5Index = getRecommendedIndexByIndex(d5Index, USE_FREQUENCY);
    e5Index = getRecommendedIndexByIndex(e5Index, GOODS_LIFE);

    let recommendedIndex =
        Number(a35Index) +
        Number(b25Index) +
        Number(c35Index) +
        Number(d5Index) +
        Number(e5Index);
    return recommendedIndex.toFixed(2);
}

export default getRecommendIndex;
