const isAlreadyExistInCart = (cart, id) => {
    return cart.filter((prod) => prod._id === id).length;
};

export { isAlreadyExistInCart };