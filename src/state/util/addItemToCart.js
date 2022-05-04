import axios from "axios";
import { CART_ACTION } from "../action";

const addItemToCart = async(cartDispatch, product, token) => {

    
    
    try {
        const {
            data: { cart },
        } = await axios.post(
            "/api/user/cart", {
                product,
            }, {
                headers: {
                    authorization: token,
                },
            }
        );
        

        cartDispatch({ type: CART_ACTION.ADD_TO_CART, payload: cart });
    } catch (error){
        cartDispatch({ type: CART_ACTION.ERROR, payload: "error occured here" });
       
    }
};

export { addItemToCart };