const sortByPriceRange = (products, price_range) =>
    products.filter((prod) => prod.finalPrice <= price_range);

export { sortByPriceRange };