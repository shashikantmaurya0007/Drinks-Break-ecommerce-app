import { CART_ACTION } from "../index";
import axios from "axios";
const removeItemFromCart = async(productId, cartDispatch) => {
    console.log(productId, cartDispatch, "sfsfsfshello");
    const {
        data: { cart },
    } = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    });
    console.log(cart);
    cartDispatch({ type: CART_ACTION.REMOVE_FROM_CART, payload: cart });
};

export { removeItemFromCart };