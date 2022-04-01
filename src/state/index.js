import {
    productinitalstate,
    filterinitialstate,
    wishlistinitialstate,
} from "./initalstate";
import { ProductProvider, useProducts } from "./context/productContext";
import { FilterProvider, useFilter } from "./context/filterContext";
import { UserProvider, useUser } from "./context/userContext";
import { FILTER_ACTION, CART_ACTION, WISHLIST_ACTION } from "./action";
import { CartProvider, useCart } from "./context/cartContext";
import { addItemToCart } from "./util/addItemToCart";
import { isAlreadyExistInCart } from "./util/isAlreadyExistInCart";
import { removeItemFromCart } from "./util/removeItemFromCart.js";
import { wishListReducer } from "./reducers/wishListReducer";
import { changeTheQuantity } from "./util/changeTheQuantity";
import { calculatePriceDetails } from "./util/calculatePriceDetails";
import { WishListProvider, useWishList } from "./context/wishListContext";
import { addToWishList } from "./util/addToWishList";
import { removeFromWishList } from "./util/removeFromWishList";
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
    calculatePriceDetails,
    WISHLIST_ACTION,
    wishlistinitialstate,
    wishListReducer,
    WishListProvider,
    useWishList,
    addToWishList,
    removeFromWishList,
};