import React from "react";
import { Logo } from "./Logo";
import { NavbarSearch } from "./NavbarSearch";
import { HamburgerSearch } from "./HamburgerSearch";
import "../styles/Navbar.css";
import { UserProfileInNavbar } from "./UserProfileInNavbar";
import { HamburgerNavbar } from "./HamburgerNavbar";
import { useState } from "react";

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
        <a class="redirection" href="./index.html">
          <Logo></Logo>
        </a>
        <section className="home_shop_nav">
          <div className="container_btn">
            <a href="https://www.google.com/" class="btn btn-primary btn-icon">
              <i class="bi bi-house-door-fill"></i>
            </a>
            <span className="container_btn_lower_text">Home</span>
          </div>
          <div className="container_btn">
            <a href="https://www.google.com/" class="btn btn-primary btn-icon">
              <i class="bi bi-shop"></i>
            </a>
            <span className="container_btn_lower_text">Shop Now</span>
          </div>
        </section>
        <NavbarSearch></NavbarSearch>

        <section class="navbar_btn_container">
          <a title="cart" class="redirection" href="./CartManagement/cart.html">
            <div class="badge">
              <span class="icon-badge">
                <i class="bi bi-cart-fill"></i>
              </span>
              <span class="badge-up">4</span>
            </div>
          </a>
          <a
            title="wishlist"
            class="redirection"
            href="./WishList/wishlist.html"
          >
            <div class="badge">
              <span class="icon-badge">
                <i class="bi bi-heart-fill"></i>
              </span>
              <span class="badge-up">5</span>
            </div>
          </a>
        </section>
        <UserProfileInNavbar />
      </nav>
      <HamburgerSearch />
    </>
  );
};

export { Navbar };
