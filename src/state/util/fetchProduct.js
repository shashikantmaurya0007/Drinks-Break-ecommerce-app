import axios from "axios";
import { FETCH_ALL_PRODUCT_ACTION } from "../action";
const fetchProduct = async ({ productDispatch }) => {
  productDispatch({ type: FETCH_ALL_PRODUCT_ACTION.FETCH_PRODUCT_BEGIN });

  try {
    const {
      data: { products },
      status,
    } = await axios.get("/api/products");

    if (status >= 200 && status <= 300) {
      setTimeout(
        () =>
          productDispatch({
            type: FETCH_ALL_PRODUCT_ACTION.FETCH_PRODUCT_SUCCESS,
            payload: { products },
          }),
        3000
      );
    } else throw new Error();
  } catch (e) {
    productDispatch({ type: FETCH_ALL_PRODUCT_ACTION.FETCH_PRODUCT_FAILURE });
  }
};
export { fetchProduct };
