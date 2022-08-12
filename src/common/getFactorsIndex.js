import category from "../common/category";

/**
 * @desc 获取是否小于每月同类目平均值的指数
 * @param {*} goodsPrice
 * @param {*} cateAveragePrice
 * @returns
 */
function getIsLessCategoryAveragePriceIndex(goodsPrice, cateAveragePrice) {
    return getRecommendedIndexInverse(
        ((goodsPrice / cateAveragePrice) * 100).toFixed(2)
    );
}

// 计算推荐指数，反比
function getRecommendedIndexInverse(proportion) {
    // console.log(100 - proportion, proportion);
    if (100 - proportion > 90) {
        return Number(Math.random() * 10 + 90).toFixed(2);
    } else if (100 - proportion > 80) {
        return Number(Math.random() * 10 + 80).toFixed(2);
    } else if (100 - proportion > 70) {
        return Number(Math.random() * 10 + 70).toFixed(2);
    } else if (100 - proportion > 50) {
        return Number(Math.random() * 20 + 50).toFixed(2);
    } else if (100 - proportion > 0) {
        return Number(Math.random() * 20 + 30).toFixed(2);
    } else if (100 - proportion > -30) {
        return Number(Math.random() * 5 + 15).toFixed(2);
    } else if (100 - proportion > -60) {
        return Number(Math.random() * 5 + 10).toFixed(2);
    } else {
        return Number(Math.random() * 6).toFixed(2);
    }
}

/**
 * 价格是否小于每月在此类目的总花费之内，重要程度：10%
 * @param {*} goodsPrice
 * @param {*} cateTotalPrice
 * @returns
 */
function getIsLessCategoryTotalPriceIndex(goodsPrice, cateTotalPrice) {
    return getRecommendedIndexInverse(
        ((goodsPrice / cateTotalPrice) * 100).toFixed(2)
    );
}

// 价格是否小于每月所有可支配金额，重要程度：20%
function getIsLessAmountIndex(goodsPrice, amount) {
    return getRecommendedIndexInverse(((goodsPrice / amount) * 100).toFixed(2));
}

// let d30Proportion = isHighFrequency(goods);
// let d30Recommended = getRecommendedIndexByFrequency(d30Proportion);
// let e10Proportion = isLongLife(goods);
// let e10Recommended = getRecommendedIndexByLife(e10Proportion);

// 使用频率高低，重要程度：30%
function getIsHighFrequencyIndex(goodsType) {
    return getRecommendedIndexByFrequency(category[goodsType].frequency);
}

// 根据频率占比，计算推荐指数，正比
function getRecommendedIndexByFrequency(proportion) {
    if (100 - proportion < 30) {
        return (proportion + 15).toFixed(2);
    }
    return (proportion + 5).toFixed(2);
}

/**
 * @desc 商品寿命，重要程度：10%
 * @param {*} goodsType 
 * @returns 
 */
function getIsLongLifeIndex(goodsType) {
    return getRecommendedIndexByLife(category[goodsType].life);
}

// 根据商品寿命，计算推荐指数
function getRecommendedIndexByLife(life) {
    if (life > 360 * 3) {
        return 150;
    } else if (life > 360 * 2) {
        return 100;
    } else if (life > 360) {
        return 80;
    }
    return 60;
}

export { getIsLessCategoryAveragePriceIndex };
export { getIsLessCategoryTotalPriceIndex };
export { getIsLessAmountIndex };
export { getIsHighFrequencyIndex };
export { getIsLongLifeIndex };
