import React, { createContext, useReducer, useContext } from "react";
import { wishlistinitialstate, wishListReducer } from "../index";

const wishListcontext = createContext(wishlistinitialstate);
const useWishList = () => useContext(wishListcontext);
const WishListProvider = ({ children }) => {
  const [wishliststate, wishlistDispatch] = useReducer(
    wishListReducer,
    wishlistinitialstate
  );
  console.log(wishlistDispatch);
  return (
    <wishListcontext.Provider value={{ wishliststate, wishlistDispatch }}>
      {children}
    </wishListcontext.Provider>
  );
};

export { WishListProvider, useWishList };
