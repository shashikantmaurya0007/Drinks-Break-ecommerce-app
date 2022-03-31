import { CART_ACTION } from "../action";
const cartReducer = (prevstatae, { type, payload }) => {
    switch (type) {
        case CART_ACTION.ADD_TO_CART:
            {
                console.log(payload);
                return {
                    ...prevstatae,
                    cartProducts: [...payload],
                };
            }

        case CART_ACTION.REMOVE_FROM_CART:
            {
                return {
                    ...prevstatae,
                    cartProducts: [...payload],
                };
            }
        case CART_ACTION.INCREASE_QUANTITY:
            {
                return {
                    ...prevstatae,
                    cartProducts: [...payload],
                };
            }
        case CART_ACTION.DECREASE_QUANTITY:
            {
                return {
                    ...prevstatae,
                    cartProducts: [...payload],
                };
            }
        case CART_ACTION.LOADING:
            {
                return {...prevstatae, loading: payload };
            }

        case CART_ACTION.ERROR:
            {
                return {
                    ...prevstatae,
                    error: payload,
                };
            }
        default:
            {
                return prevstatae;
            }
    }
};

export { cartReducer };