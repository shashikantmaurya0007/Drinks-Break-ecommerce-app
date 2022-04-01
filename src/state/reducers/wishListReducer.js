import { WISHLIST_ACTION } from "../index";

const wishListReducer = (prevstatae, { type, payload }) => {
    switch (type) {
        case WISHLIST_ACTION.LOADING:
            {
                return {...prevstatae, loading: payload };
            }
        case WISHLIST_ACTION.ERROR:
            {
                return {
                    ...prevstatae,
                    error: payload,
                    loading: false,
                };
            }
        case WISHLIST_ACTION.ADD_TO_WISHLIST:
            {
                return {
                    ...prevstatae,
                    wishlistproducts: [...payload],
                };
            }
        case WISHLIST_ACTION.REMOVE_FROM_WISHLIST:
            {
                return {
                    ...prevstatae,
                    wishlistproducts: [...payload],
                };
            }
        default:
            {
                return {...prevstatae };
            }
    }
};

export { wishListReducer };