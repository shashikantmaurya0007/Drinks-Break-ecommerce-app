import React, { useState, useEffect } from "react";
import { useStateCallback } from "use-state-callback";
import { useNavigate } from "react-router-dom";
import { useUser, validateSignUp } from "../state/index.js";
import { toast } from "react-toastify";
import { registerUser } from "../state/util/registerUser.js";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useStateCallback("");
  const [lastName, setLastName] = useStateCallback("");
  const [email, setEmail] = useStateCallback("");
  const [password, setPassword] = useStateCallback("");
  const [confirmPassword, setConfirmPassword] = useStateCallback("");
  //error message
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    user: { isLoggedIn },
  } = useUser();

  const signUpFormSubmission = async () => {
    const validate = validateSignUp(
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
      confirmPasswordError
    );

    if (!validate) {
      toast.error("Please fill all the details");
      return;
    } else if (password !== confirmPassword) {
      toast.error("password and confirmPassword didnot match");

      return;
    }

    const status = await registerUser({ email, password, firstName, lastName });

    if (status === 201) toast.success("successfully signup");
    else {
      toast.error("user already registered");
      return;
    }
    navigate("/login");
  };
  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  return (
    <main className="signup-container">
      <form className="signup-box">
        <h1 className="signup-header">Sign- Up</h1>
        <div className="lab-input">
          <label>FirstName*</label>
          <input
            type="text"
            placeholder="shashi"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value, (firstName) => {
                firstName.trim().length
                  ? setFirstNameError("")
                  : setFirstNameError("*First Name can not be empty*");
              });
            }}
          />
          <p className="form_error">{firstNameError}</p>
        </div>
        <div className="lab-input">
          <label>LastName*</label>
          <input
            type="text"
            placeholder="Maurya"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value, (lastName) => {
                lastName.trim().length
                  ? setLastNameError("")
                  : setLastNameError("*Last Name can not be empty*");
              });
            }}
          />
          <p className="form_error">{lastNameError}</p>
        </div>
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
        <div className="lab-input">
          <label>Confirm Password*</label>
          <input
            type={!showConfirmPassword ? "password" : "text"}
            placeholder="Do not share your password                                                    "
            onChange={(e) =>
              setConfirmPassword(e.target.value, (password) => {
                password.trim().length >= 4
                  ? setConfirmPasswordError("")
                  : setConfirmPasswordError(
                      "Confirm-Password field can not be empty and minimum length is 4"
                    );
              })
            }
            value={confirmPassword}
          />
          <button
            onClick={(e) => {
              setShowConfirmPassword((prev) => !prev);
              e.preventDefault();
            }}
            className="showPassword_"
          >
            {!showConfirmPassword ? (
              <i class="bi bi-eye-slash-fill"></i>
            ) : (
              <i class="bi bi-eye-fill"></i>
            )}
          </button>
          <p className="form_error">{confirmPasswordError}</p>
        </div>

        <div className="checkbox" style={{ width: "90%" }}>
          <label for="checkbox-2">
            <input id="checkbox-2" name="checkbox" type="checkbox" />I accept
            terms and conditions
          </label>
        </div>
        <div style={{ width: "90%" }}>
          <p
            onClick={signUpFormSubmission}
            className="btn btn-primary btn-solid"
          >
            Sign-up
          </p>
        </div>

        <p
          className="btn btn-primary btn-link"
          onClick={() => navigate("/login")}
        >
          Already Have an account let me log-in
        </p>
      </form>
    </main>
  );
};

export { Signup };
