const sortByRating = (products, rating) => {
    return products.reduce(
        (acc, curr) => (curr.rating >= rating ? acc.concat(curr) : acc), []
    );
};
export { sortByRating };