import axios from "axios";

const loginUser = async(email, password) => {
    console.log("hua");
    try {
        const {
            status,
            token,
            data: { foundUser, encodedToken },
        } = await axios.post("/api/auth/login", {
            email: email,
            password: password,
        });
        console.log(status, foundUser, encodedToken);
        return { status, foundUser, encodedToken };
    } catch (e) {
        console.log(e);
        return { status: 404, foundUser: "", encodedToken: "" };
    }
};

export { loginUser };