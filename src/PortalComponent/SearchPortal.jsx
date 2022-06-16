import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ProductCard } from "../component/ProductCard";
import { useDebounce } from "../customHooks/useDebounce";
import { FILTER_ACTION, useProducts, useSearch } from "../state";
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
  const { setShowSearchModal } = useSearch();
  const closeSearchBar = () => {
    setShowSearchModal((prev) => false);
    filterDispatch({
      type: FILTER_ACTION.SORT_BY_SEARCH,
      payload: {
        ...filterinitialstate,
        searchText: "",
      },
    });
  };
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
      prod.brand
        .toLowerCase()
        .trim()
        .includes(searchText.toLowerCase().trim()) ||
      prod.category.toLowerCase().trim().includes(searchText.toLowerCase()) ||
      prod.title.toLowerCase().trim().includes(searchText.toLowerCase())
  );

  const debounceSearch = useDebounce(search, 400);
  const noProductFound = !Boolean(searchResultProucts?.length);

  useEffect(() => {
    inputRef.current.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return ReactDOM.createPortal(
    <div className="outer_search_con">
      <div className=" search_content">
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
        {!noProductFound && (
          <div className="search_product_list">
            {searchResultProucts?.map((prod) => (
              <ProductCard product={prod} />
            ))}
          </div>
        )}
        {noProductFound && (
          <div className="no_result_found">
            <p> No Product found for "{searchText}"</p>
            <img
              className="img_no_result_found"
              src="/assets/NoSearchResult.png"
              alt=""
            />
          </div>
        )}
      </div>

      <button onClick={() => closeSearchBar()} className="search_cancel_btn">
        <i class="bi bi-x-square-fill"></i>
      </button>
    </div>,
    document.getElementById("searchPortal")
  );
};

export { SearchPortal };
