// import { productinitalstate } from "../initalstate";
import { FETCH_ALL_PRODUCT_ACTION } from "../action";

const productReducer = (prevProductsState, { type, payload }) => {
    const { products } = payload || [];

    switch (type) {
        case FETCH_ALL_PRODUCT_ACTION.FETCH_PRODUCT_BEGIN:
            {
                return {
                    ...prevProductsState,
                    loading: true,
                    products: [],
                    error: "",
                };
            }
        case FETCH_ALL_PRODUCT_ACTION.FETCH_PRODUCT_SUCCESS:
            {
                return {
                    ...prevProductsState,
                    loading: false,
                    products: products,
                    error: "",
                };
            }
        case FETCH_ALL_PRODUCT_ACTION.FETCH_PRODUCT_FAILURE:
            {
                return {
                    ...prevProductsState,
                    loading: false,
                    products: [],
                    error: "sorry we are not able to fetch any products for you.Try later!",
                };
            }
        default:
            return prevProductsState;
    }
};

export { productReducer };