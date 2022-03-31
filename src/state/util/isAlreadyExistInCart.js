const isAlreadyExistInCart = (cart, id) => {
    console.log(cart, "cart_id", id);
    return cart.filter((prod) => prod._id === id).length;
};

export { isAlreadyExistInCart };