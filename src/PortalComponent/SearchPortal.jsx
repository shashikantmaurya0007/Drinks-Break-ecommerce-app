import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDebounce } from "../customHooks/useDebounce";
import { FILTER_ACTION, useProducts } from "../state";
import { useFilter } from "../state";
import { filterinitialstate } from "../state";
import "./SearchPortal.css";
const SearchPortal = () => {
  const {
    filterDispatch,
    filterstate: { searchText },
  } = useFilter();

  const {
    productsState: { products },
  } = useProducts();

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const search = (e) => {
    filterDispatch({
      type: FILTER_ACTION.SORT_BY_SEARCH,
      payload: {
        ...filterinitialstate,
        searchText: e.target.value,
      },
    });
  };

  const searchResultProucts = products?.filter(
    (prod) =>
      prod.brand.toLowerCase().includes(searchText.toLowerCase()) ||
      prod.category.toLowerCase()
  );

  const debounceSearch = useDebounce(search, 400);

  return ReactDOM.createPortal(
    <div className="outer_search_con">
      <div className="search_con">
        <div>
          <input
            ref={inputRef}
            placeholder="Search your drink here...."
            className="searchPortalSearch"
            type="text"
            onChange={(e) => debounceSearch(e)}
          />
        </div>
      </div>
    </div>,
    document.getElementById("searchPortal")
  );
};

export { SearchPortal };
