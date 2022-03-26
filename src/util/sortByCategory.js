const sortByCategory = (products, category) => {
    return category.length == 0 ?
        products :
        products.filter((prod) => category.includes(prod.category));
};

export { sortByCategory };