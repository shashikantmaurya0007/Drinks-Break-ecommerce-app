import React from "react";

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
          <a href="https://www.google.com/" class="btn btn-primary btn-icon">
            <i class="bi bi-person-fill"></i>
          </a>
          <span className="container_btn_lower_text">Hello</span>
        </div>
      </section>
      <section className="user_navbar" style={{ display: disp_ }}>
        {/* <Link path="/">Account</Link> */}
        {/* <Link path="/">Login</Link> */}
        <p className="user_navbar_option">Account</p>
        <div className="break"></div>
        <p className="user_navbar_option">Login</p>
        {/* <Link>Login</Link> */}
      </section>
    </section>
  );
};

export { UserProfileInNavbar };
