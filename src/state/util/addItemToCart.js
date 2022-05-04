import axios from "axios";
import { CART_ACTION } from "../action";

const addItemToCart = async(cartDispatch, product, token) => {

    console.log("i came here",cartDispatch,product,token)
    
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
        console.log(cart,"cart")

        cartDispatch({ type: CART_ACTION.ADD_TO_CART, payload: cart });
    } catch (error){
        cartDispatch({ type: CART_ACTION.ERROR, payload: "error occured here" });
        console.log(error)
    }
};

export { addItemToCart };