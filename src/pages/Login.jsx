import React, { useState, useEffect } from "react";
import { useStateCallback } from "use-state-callback";
import "../styles/Authentication.css";
import { useNavigate, useLocation } from "react-router-dom";
import { validateLoginUser, loginUser, useUser } from "../state/index";
import { toast } from "react-toastify";
import { USER_AUTH_ACTION } from "../state/action";

const Login = () => {
  const [password, setPassword] = useStateCallback("");
  const [email, setEmail] = useStateCallback("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useStateCallback("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const redirect = state?.from || "/";

  const {
    user: { isLoggedIn },
    userDispatch,
  } = useUser();
  const loginTestUser = async () => {
    const res = await loginUser("shashimourya1@gmail.com", "shashi1234");
    const { status, foundUser, encodedToken } = res;

    if (status === 201) {
      toast.error("wrong password");
      return;
    }
    if (status === 404) {
      toast.error("wrong email and password");
      return;
    }
    toast.success(`${foundUser.firstName} wish you happy shopping`);
    const loginDetails = {
      isLoggedIn: true,
      firstName: foundUser.firstName,
      encodedToken: encodedToken,
    };

    localStorage.setItem("loginDetails", JSON.stringify(loginDetails));

    userDispatch({
      type: USER_AUTH_ACTION.LOGIN_SUCCESSFULL,
      payload: { ...loginDetails },
    });

    navigate(redirect, { replace: true });
  };
  const loginAndValidateUser = async () => {
    const validate = validateLoginUser(email, emailError, passwordError);
    if (!validate) {
      toast.error("Please fill all the details");
      return;
    }

    const res = await loginUser(email, password);
    const { status, foundUser, encodedToken } = res;

    if (status === 201) {
      toast.error("wrong password");
      return;
    }
    if (status === 404) {
      toast.error("wrong email and password");
      return;
    }
    toast.success(`${foundUser.firstName} wish you happy shopping`);
    const loginDetails = {
      isLoggedIn: true,
      firstName: foundUser.firstName,
      encodedToken: encodedToken,
    };

    localStorage.setItem("loginDetails", JSON.stringify(loginDetails));

    userDispatch({
      type: USER_AUTH_ACTION.LOGIN_SUCCESSFULL,
      payload: { ...loginDetails },
    });

    navigate(redirect, { replace: true });
  };
  useEffect(
    () => isLoggedIn && navigate(redirect, { replace: true }),
    [isLoggedIn, navigate]
  );
  return (
    <main className="signup-container">
      <section className="signup-box">
        <h1 className="signup-header">Sign In</h1>

        <div className="lab-input">
          <label>Email*</label>
          <input
            type="Email"
            placeholder="shashimourya1@gmail.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value, (email) => {
                const reg = /\S+@\S+\.\S+/;
                reg.test(email)
                  ? setEmailError("")
                  : setEmailError("*Please enter the correct email pattern*");
              })
            }
          />
          <p className="form_error">{emailError}</p>
        </div>
        <div className="lab-input">
          <label> Password*</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Do not share your password                                                    "
            value={password}
            onChange={(e) =>
              setPassword(e.target.value, (password) => {
                password.trim().length >= 4
                  ? setPasswordError("")
                  : setPasswordError(
                      "Password field can not be empty and minimum length is 4"
                    );
              })
            }
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowPassword((prev) => !prev);
            }}
            className="showPassword_"
          >
            {!showPassword ? (
              <i class="bi bi-eye-slash-fill"></i>
            ) : (
              <i class="bi bi-eye-fill"></i>
            )}
          </button>
          <p className="form_error">{passwordError}</p>
        </div>

        <div className="checkbox check_ ">
          <label for="checkbox-2">
            <input id="checkbox-2" name="checkbox" type="checkbox" />
            Remember me
          </label>

          <p className="btn btn-primary btn-link">Forgot Password?</p>
        </div>
        <div className="login_btn">
          <p className="btn btn-primary btn-solid" onClick={loginTestUser}>
            Login Test User
          </p>
          <p
            className="btn btn-primary btn-solid"
            onClick={loginAndValidateUser}
          >
            Login
          </p>
        </div>
        <p
          onClick={() => navigate("/sign-up")}
          className="btn btn-primary btn-link"
        >
          Create a new Account
        </p>
      </section>
    </main>
  );
};

export { Login };
