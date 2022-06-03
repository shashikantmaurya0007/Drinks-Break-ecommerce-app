import axios from "axios";
import { WISHLIST_ACTION } from "../index";

const removeFromWishList = async(productId, wishlistDispatch, token) => {
    const {
        data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
            authorization: token,
        },
    });

    wishlistDispatch({
        type: WISHLIST_ACTION.REMOVE_FROM_WISHLIST,
        payload: wishlist,
    });
};

export { removeFromWishList };