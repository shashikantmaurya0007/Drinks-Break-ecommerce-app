import axios from "axios";
import { WISHLIST_ACTION } from "../index";
const addToWishList = async(product, wishlistDispatch) => {
    const {
        data: { wishlist },
    } = await axios.post(
        "/api/user/wishlist", { product }, {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        }
    );
    wishlistDispatch({
        type: WISHLIST_ACTION.ADD_TO_WISHLIST,
        payload: wishlist,
    });
};

export { addToWishList };