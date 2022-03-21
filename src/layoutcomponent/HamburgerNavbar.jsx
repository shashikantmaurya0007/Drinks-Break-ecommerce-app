import React from "react";

const HamburgerNavbar = ({ showHamburgerMenu, setShowHamburgerMenu }) => {
  return (
    <div className={"hamburger_navbar " + (showHamburgerMenu ? "show" : "")}>
      <div className="Hamburger_profile">
        <div className="profile_cross">
          <i className="bi bi-person-circle hamburger_profile_icon"></i>
          <i
            onClick={() => setShowHamburgerMenu((prev) => false)}
            class="bi bi-x-octagon-fill hamburger_profile_cross"
          ></i>
        </div>
      </div>
      <section className="home_shop_nav hamburger_button_column">
        <div className="container_btn">
          <a href="https://www.google.com/" class="btn btn-primary btn-icon">
            <i class="bi bi-house-door-fill"></i>
          </a>
          <span className="container_btn_lower_text">Home</span>
        </div>
        <div className="break"></div>
        <div className="container_btn">
          <a href="https://www.google.com/" class="btn btn-primary btn-icon">
            <i class="bi bi-shop"></i>
          </a>
          <span className="container_btn_lower_text">Shop Now</span>
        </div>
        <div className="break"></div>
      </section>
    </div>
  );
};

export { HamburgerNavbar };
