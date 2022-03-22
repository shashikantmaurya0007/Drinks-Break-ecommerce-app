import React from "react";
import { Link } from "react-router-dom";

const HamburgerNavbar = ({ showHamburgerMenu, setShowHamburgerMenu }) => {
  return (
    <div className={"hamburger_navbar " + (showHamburgerMenu ? "show" : "")}>
      <div className="Hamburger_profile">
        <div className="profile_cross">
          <i className="bi bi-person-circle hamburger_profile_icon"></i>
          <i
            onClick={() => setShowHamburgerMenu((prev) => false)}
            className="bi bi-x-octagon-fill hamburger_profile_cross"
          ></i>
        </div>
      </div>
      <section className="home_shop_nav hamburger_button_column">
        <Link to={"/"} className="link_">
          <div className="container_btn">
            <p class="btn btn-primary btn-icon">
              <i class="bi bi-house-door-fill"></i>
            </p>
            <span className="container_btn_lower_text">Home</span>
          </div>
        </Link>
        <div className="break"></div>
        <Link to={"/products"} className="link_">
          <div className="container_btn">
            <p className="btn btn-primary btn-icon">
              <i class="bi bi-shop"></i>
            </p>
            <span className="container_btn_lower_text">Shop Now</span>
          </div>
        </Link>
        <div className="break"></div>
      </section>
    </div>
  );
};

export { HamburgerNavbar };
