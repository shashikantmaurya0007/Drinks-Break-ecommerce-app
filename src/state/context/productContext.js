import { productinitalstate } from "../initalstate";
import { createContext, useEffect, useReducer, useContext } from "react";
import { productReducer } from "../reducers/productReducer";
import { fetchProduct } from "../util/fetchProduct";

const productcontext = createContext(productinitalstate);
const useProducts = () => useContext(productcontext);
const ProductProvider = ({ children }) => {
  const [productsState, productDispatch] = useReducer(
    productReducer,
    productinitalstate
  );
  useEffect(() => {
    fetchProduct({ productDispatch });
  }, []);
  return (
    <productcontext.Provider value={{ productsState, productDispatch }}>
      {children}
    </productcontext.Provider>
  );
};

export { ProductProvider, useProducts };
