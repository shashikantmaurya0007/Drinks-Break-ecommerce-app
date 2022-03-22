import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserProfileInNavbar = () => {
  const [disp_, setDisplay] = useState("none");

  return (
    <section>
      <section>
        <div
          className="container_btn"
          onClick={() =>
            setDisplay((prev) => (prev === "none" ? "block" : "none"))
          }
        >
          <p className="btn btn-primary btn-icon">
            <i class="bi bi-person-fill"></i>
          </p>
          <span className="container_btn_lower_text">Hello</span>
        </div>
      </section>
      <section className="user_navbar" style={{ display: disp_ }}>
        <Link to={"/sign-up"} className="link_">
          <p className="user_navbar_option">Account</p>
        </Link>
        <div className="break"></div>
        <Link to={"/login"} className="link_">
          <p className="user_navbar_option">Login</p>
        </Link>
      </section>
    </section>
  );
};

export { UserProfileInNavbar };
