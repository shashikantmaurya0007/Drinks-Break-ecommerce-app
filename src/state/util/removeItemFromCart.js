import { CART_ACTION } from "../index";
import axios from "axios";
const removeItemFromCart = async (productId, cartDispatch, encodedToken) => {
  try {
    const {
      data: { cart },
    } = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: encodedToken,
      },
    });

    cartDispatch({ type: CART_ACTION.REMOVE_FROM_CART, payload: cart });
  } catch (error) {
    error, localStorage.getItem("token");
  }
};

export { removeItemFromCart };
