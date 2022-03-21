import React from "react";

const NavbarSearch = () => {
  return (
    <section className="navbar_search ">
      <div className="lab-input search">
        <a
          href="https://www.google.com/"
          className="btn btn-primary btn-icon search_btn"
        >
          <i className="bi bi-search"></i>
        </a>
        <input type="text" placeholder="Search your drink" />
      </div>
    </section>
  );
};

export { NavbarSearch };
