const validateSignUp = (
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
) => {
    if (!firstName.trim().length ||
        !lastName.trim().length ||
        !email.trim().length ||
        !password.trim().length ||
        !confirmPassword.trim().length
    )
        return false;
    console.log(lastNameError);
    if (
        firstNameError != "" ||
        lastNameError != "" ||
        emailError != "" ||
        passwordError != "" ||
        confirmPasswordError != ""
    )
        return false;

    return true;
};

export { validateSignUp };