import { productinitalstate, filterinitialstate } from "./initalstate";
import { ProductProvider, useProducts } from "./context/productContext";
import { FilterProvider, useFilter } from "./context/filterContext";
import { UserProvider, useUser } from "./context/userContext";
import { FILTER_ACTION } from "./action";
import { CartProvider, useCart } from "./context/cartContext";
import { addItemToCart } from "./util/addItemToCart";
import { isAlreadyExistInCart } from "./util/isAlreadyExistInCart";
import { removeItemFromCart } from "./util/removeItemFromCart.js";
import { CART_ACTION } from "./action";
import { changeTheQuantity } from "./util/changeTheQuantity";

export {
    productinitalstate,
    ProductProvider,
    useProducts,
    filterinitialstate,
    FilterProvider,
    useFilter,
    FILTER_ACTION,
    UserProvider,
    useUser,
    CartProvider,
    useCart,
    addItemToCart,
    isAlreadyExistInCart,
    CART_ACTION,
    removeItemFromCart,
    changeTheQuantity,
};