import React from "react";

const HamburgerSearch = () => {
  return (
    <section className="navbar_search hamburger_search ">
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
