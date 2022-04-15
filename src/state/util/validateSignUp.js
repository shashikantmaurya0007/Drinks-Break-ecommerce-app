const validateSignUp = (
    firstName,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    confirmPasswordError
) => {
    if (!firstName.trim().length) return false;
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