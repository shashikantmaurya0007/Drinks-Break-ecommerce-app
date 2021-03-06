import React from "react";
import { useSearch } from "../state";
const HamburgerSearch = () => {
  const { setShowSearchModal } = useSearch();
  return (
    <section
      onClick={() => setShowSearchModal(true)}
      className="navbar_search hamburger_search "
    >
      <div className="lab-input search">
        <p className="btn btn-primary btn-icon search_btn">
          <i className="bi bi-search"></i>
        </p>
        <input type="text" placeholder="Search your drink" />
      </div>
    </section>
  );
};

export { HamburgerSearch };
