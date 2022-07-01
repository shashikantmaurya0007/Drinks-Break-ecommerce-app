import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../state";
import { USER_AUTH_ACTION } from "../state/action";

import { useOnClickOutside } from "../customHooks/useOnClickOutside";

const UserProfileInNavbar = () => {
  const [disp_, setDisplay] = useState("none");

  const {
    user: { isLoggedIn, firstName },
    userDispatch,
  } = useUser();
  const userProfileRef = useRef();

  const closeUserProfile = () => setDisplay("none");
  useOnClickOutside(userProfileRef, closeUserProfile);
  return (
    <section ref={userProfileRef}>
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
          <span className="container_btn_lower_text">Hi {firstName}</span>
        </div>
      </section>
      <section className="user_navbar" style={{ display: disp_ }}>
        {isLoggedIn ? (
          <p
            className="user_navbar_option"
            onClick={() => {
              userDispatch({ type: USER_AUTH_ACTION.LOGOUT_SUCCESSFULL });
              localStorage.removeItem("loginDetails");
              window.location.reload(false);
            }}
          >
            Logout
          </p>
        ) : (
          <div>
            <Link to={"/sign-up"} className="link_">
              <p className="user_navbar_option">signup</p>
            </Link>
            <div className="break"></div>
            <Link to={"/login"} className="link_">
              <p className="user_navbar_option">Login</p>
            </Link>
          </div>
        )}
      </section>
    </section>
  );
};

export { UserProfileInNavbar };
