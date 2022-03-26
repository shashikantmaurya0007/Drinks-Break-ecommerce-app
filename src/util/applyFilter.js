import {
    sortByFilter,
    sortByRating,
    sortByCategory,
    sortByPriceRange,
} from "./index";
var applyFilter = (products, { sort_by, rating, category, price_range }) => {
    const sortBYFilterProducts = sortByFilter([...products], sort_by);

    const sortByRatingProducts = sortByRating([...sortBYFilterProducts], rating);
    const sortByCategoryProducts = sortByCategory(
        [...sortByRatingProducts],
        category
    );

    const sortByPriceRangePriceProducts = sortByPriceRange(
        [...sortByCategoryProducts],
        price_range
    );
    return sortByPriceRangePriceProducts;
};
export { applyFilter };