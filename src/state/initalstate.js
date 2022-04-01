const productinitalstate = {
    loading: false,
    products: [],
    error: "",
};

const filterinitialstate = {
    sort_by: "",
    rating: 2,
    category: [],
    price_range: 1500,
};

const cartinitialstate = {
    loading: false,
    cartProducts: [],

    error: "",
};
const wishlistinitialstate = {
    loading: false,
    wishlistproducts: [],

    error: "",
};

export {
    productinitalstate,
    filterinitialstate,
    cartinitialstate,
    wishlistinitialstate,
};