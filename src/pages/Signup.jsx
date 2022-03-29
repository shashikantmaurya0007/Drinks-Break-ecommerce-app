import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../state/util/index";

const Signup = () => {
  const navigate = useNavigate();
  const [signUpForm, updateSignUpForm] = useState({
    email: "   ",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const [validationMessage, setValidationMessage] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const signUpFormSubmission = async () => {
    if (signUpForm.firstName.trim() === "") {
      setValidationMessage((prev) => {
        return { ...prev, firstName: "firstName can not be empty" };
      });
    } else {
      setValidationMessage((prev) => {
        return { ...prev, firstName: "" };
      });
    }
    if (signUpForm.lastName.trim() === "") {
      setValidationMessage((prev) => {
        return { ...prev, lastName: "lastName can not be empty" };
      });
    } else {
      setValidationMessage((prev) => {
        return { ...prev, lastName: "" };
      });
    }
    if (
      signUpForm.email.trim() === "" ||
      !signUpForm.email.includes("@") ||
      !signUpForm.email.includes(".")
    ) {
      setValidationMessage((prev) => {
        return { ...prev, email: "email must include @ and ." };
      });
    } else {
      setValidationMessage((prev) => {
        return { ...prev, email: "" };
      });
    }
    if (
      signUpForm.password.trim() === "" ||
      !signUpForm.password.includes("@") ||
      !/\d/.test(signUpForm.password)
    ) {
      setValidationMessage((prev) => {
        return {
          ...prev,
          password: "email must include @ and one numberic char",
        };
      });
      console.log("email");
    } else {
      setValidationMessage((prev) => {
        return { ...prev, password: "" };
      });
    }

    if (signUpForm.confirmPassword !== signUpForm.password) {
      setValidationMessage((prev) => {
        return {
          ...prev,
          confirmPassword: "please put the same password",
        };
      });
    } else {
      setValidationMessage((prev) => {
        return {
          ...prev,
          confirmPassword: "",
        };
      });
    }

    console.log(validationMessage.password, "validateionsfsfsfs");
    if (
      !validationMessage.firstName &&
      !validationMessage.lastName &&
      !validationMessage.email &&
      !validationMessage.password &&
      !validationMessage.confirmPassword
    ) {
      console.log("status ke pehle");
      const status = await registerUser(signUpForm);
      console.log(status);
      if (status === 201) navigate("/login");
      else {
        console.log("already registered");
      }

      console.log("shashi");
    } else {
    }
  };

  return (
    <main className="signup-container">
      <section className="signup-box">
        <h1 className="signup-header">Sign- Up</h1>
        <div className="lab-input">
          <label>FirstName*</label>
          <input
            type="text"
            placeholder="shashi"
            value={signUpForm.firstName}
            onChange={(e) =>
              updateSignUpForm({ ...signUpForm, firstName: e.target.value })
            }
          />
          <p className="form_error">{validationMessage.firstName}</p>
        </div>
        <div className="lab-input">
          <label>LastName*</label>
          <input
            type="text"
            placeholder="Maurya"
            value={signUpForm.lastName}
            onChange={(e) =>
              updateSignUpForm({ ...signUpForm, lastName: e.target.value })
            }
          />
          <p className="form_error">{validationMessage.lastName}</p>
        </div>
        <div className="lab-input">
          <label>Email*</label>
          <input
            type="Email"
            placeholder="shashimourya1@gmail.com"
            value={signUpForm.email}
            onChange={(e) =>
              updateSignUpForm({ ...signUpForm, email: e.target.value })
            }
          />
          <p className="form_error">{validationMessage.email}</p>
        </div>
        <div className="lab-input">
          <label> Password*</label>
          <input
            type="password"
            placeholder="Do not share your password                                                    👀 "
            value={signUpForm.password}
            onChange={(e) =>
              updateSignUpForm({ ...signUpForm, password: e.target.value })
            }
          />
          <p className="form_error">{validationMessage.password}</p>
        </div>
        <div className="lab-input">
          <label>Confirm Password*</label>
          <input
            type="password"
            placeholder="Do not share your password                                                    👀"
            onChange={(e) =>
              updateSignUpForm({
                ...signUpForm,
                confirmPassword: e.target.value,
              })
            }
            value={signUpForm.confirmPassword}
          />
          <p>{validationMessage.confirmPassword}</p>
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
      </section>
    </main>
  );
};

export { Signup };
