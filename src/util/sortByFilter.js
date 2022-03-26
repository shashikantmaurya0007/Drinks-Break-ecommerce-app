const sortByFilter = (products, sort_by) => {
    return sort_by === "low_to_high" ?
        products.sort((a, b) => a.finalPrice - b.finalPrice) :
        sort_by === "high_to_low" ?
        products.sort((a, b) => b.finalPrice - a.finalPrice) :
        products;
};

export { sortByFilter };