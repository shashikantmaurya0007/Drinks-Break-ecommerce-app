import React from "react";
import { Logo } from "./Logo";
import { NavbarSearch } from "./NavbarSearch";
import { HamburgerSearch } from "./HamburgerSearch";
import "../styles/Navbar.css";
import { UserProfileInNavbar } from "./UserProfileInNavbar";
import { HamburgerNavbar } from "./HamburgerNavbar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const displayHamburger = () => {
    setShowHamburgerMenu((prev) => true);
  };
  return (
    <>
      <HamburgerNavbar
        showHamburgerMenu={showHamburgerMenu}
        setShowHamburgerMenu={setShowHamburgerMenu}
      ></HamburgerNavbar>
      <nav class="apnatheka_navbar">
        <i class="bi bi-list hamburger" onClick={displayHamburger}></i>
        <Link to={"/"} className={"link_"}>
          <Logo />
        </Link>
        <section className="home_shop_nav">
          <Link to="/" className="btn btn-primary btn-icon link_">
            <div className="container_btn">
              <i class="bi bi-house-door-fill"></i>

              <span className="container_btn_lower_text">Home</span>
            </div>
          </Link>
          <Link to={"/products"} className="btn btn-primary btn-icon link_">
            <div className="container_btn">
              <i className="bi bi-shop"></i>

              <span className="container_btn_lower_text">Shop Now</span>
            </div>
          </Link>
        </section>
        <NavbarSearch></NavbarSearch>

        <section className="navbar_btn_container">
          <Link
            to={"/cart"}
            title="cart"
            className="redirection"
            href="./CartManagement/cart.html"
          >
            <div className="badge">
              <span className="icon-badge">
                <i className="bi bi-cart-fill"></i>
              </span>
              <span className="badge-up">4</span>
            </div>
          </Link>
          <Link title="wishlist" className="redirection" to={"/wishlist"}>
            <div className="badge">
              <span className="icon-badge">
                <i class="bi bi-heart-fill"></i>
              </span>
              <span class="badge-up">5</span>
            </div>
          </Link>
        </section>
        <UserProfileInNavbar />
      </nav>
      <HamburgerSearch />
    </>
  );
};

export { Navbar };
