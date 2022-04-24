import React from "react";

const validateLoginUser = (email, emailError, passwordError) => {
  if (email === "" || emailError != "" || passwordError != "") return false;

  return true;
};

export { validateLoginUser };
