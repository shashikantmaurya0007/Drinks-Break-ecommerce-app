import { createContext, useReducer, useEffect, useContext } from "react";
import { cartinitialstate } from "../initalstate";
import { cartReducer } from "../reducers/cartReducer";
import { CART_ACTION } from "../action";
import axios from "axios";

const cartcontext = createContext();

const getCartItemsInitially = async (cartDispatch) => {
  cartDispatch({ type: CART_ACTION.LOADING, payload: true });

  try {
    const {
      data: { cart },
    } = await axios.get("/api/user/cart", {
      headers: { authorization: localStorage.getItem("token") },
    });

    cartDispatch({ type: CART_ACTION.LOADING, payload: false });
  } catch {
    cartDispatch({ type: CART_ACTION.ERROR, payload: "error occured" });
  }
};

const useCart = () => useContext(cartcontext);
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartinitialstate);
  useEffect(() => getCartItemsInitially(cartDispatch), []);

  return (
    <cartcontext.Provider value={{ cartState, cartDispatch }}>
      {" "}
      {children}
    </cartcontext.Provider>
  );
};

export { CartProvider, useCart };
