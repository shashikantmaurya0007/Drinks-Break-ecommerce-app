import { FILTER_ACTION } from "../action";
import { filterinitialstate } from "../initalstate";

const filterReducer = (
    prevFilterState, { type, payload: { sort_by, rating, category, price_range } }
) => {
    switch (type) {
        case FILTER_ACTION.SORT_BY_LOW_HIGH:
            {
                return {...prevFilterState, sort_by: sort_by };
            }
        case FILTER_ACTION.SORTY_BY_RATING:
            {
                return {...prevFilterState, rating: rating };
            }

        case FILTER_ACTION.SORT_BY_PRICE:
            {
                return {...prevFilterState, price_range: price_range };
            }
        case FILTER_ACTION.SORT_BY_CATEGORY:
            {
                return {...prevFilterState, category: category };
            }
        case FILTER_ACTION.RESET_FILTER:
            {
                return {...prevFilterState, ...filterinitialstate };
            }

        default:
            {
                return {...prevFilterState, ...filterinitialstate };
            }
    }
};

export { filterReducer };