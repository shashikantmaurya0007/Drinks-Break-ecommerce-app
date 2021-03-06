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
import { validateSignUp } from "./util/validateSignUp";
import { validateLoginUser } from "./util/validateLoginUser";
import { loginUser } from "./util/loginUser";
import { userAuthReducer } from "./reducers/userAuthReducer";
import { isAlreadyExistInWishList } from "./util/isAlreadyExistInWishList";
import { SearchProvider, useSearch } from "./context/searchContext";
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
  validateSignUp,
  validateLoginUser,
  loginUser,
  userAuthReducer,
  isAlreadyExistInWishList,
  SearchProvider,
  useSearch,
};
