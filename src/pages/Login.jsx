import React from "react";
import "../styles/Authentication.css";
const Login = () => {
  return (
    <main className="signup-container">
      <section className="signup-box">
        <h1 className="signup-header">Sign In</h1>

        <div className="lab-input">
          <label>Email*</label>
          <input type="Email" placeholder="shashimourya1@gmail.com" />
        </div>
        <div className="lab-input">
          <label> Password*</label>
          <input
            type="password"
            placeholder="Do not share your password                                                    👀 "
          />
        </div>

        <div className="checkbox check_ ">
          <label for="checkbox-2">
            <input id="checkbox-2" name="checkbox" type="checkbox" />
            Remember me
          </label>

          <a href="../Signup/signup.html" className="btn btn-primary btn-link">
            Forgot Password?
          </a>
        </div>
        <div className="login_btn">
          <p className="btn btn-primary btn-solid">Login</p>
        </div>
        <a href="../Signup/signup.html" className="btn btn-primary btn-link">
          Create a new Account
        </a>
      </section>
    </main>
  );
};

export { Login };
