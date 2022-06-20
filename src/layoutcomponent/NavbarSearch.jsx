import React from "react";
import { useDebounce } from "../customHooks/useDebounce";
// import { useSearch } from "../customHooks/useSearch";
import {
  filterinitialstate,
  FILTER_ACTION,
  useFilter,
  useSearch,
} from "../state";

const NavbarSearch = () => {
  const { filterDispatch, filterstate } = useFilter();
  const { setShowSearchModal } = useSearch();
  const search = (e) => {
    filterDispatch({
      type: FILTER_ACTION.SORT_BY_SEARCH,
      payload: {
        ...filterinitialstate,
        searchText: e.target.value,
      },
    });
  };
  const debounceSearch = useDebounce(search, 400);
  return (
    <section
      onClick={() => setShowSearchModal(true)}
      className="navbar_search "
    >
      <div className="lab-input search">
        <p className="btn btn-primary btn-icon search_btn">
          <i className="bi bi-search"></i>
        </p>
        <input
          onChange={(e) => debounceSearch(e)}
          type="text"
          placeholder="Search your drink"
        />
      </div>
    </section>
  );
};

export { NavbarSearch };
