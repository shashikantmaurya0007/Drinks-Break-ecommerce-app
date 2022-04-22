import axios from "axios";

const loginUser = async(email, password) => {
    try {
        const {
            status,
            token,
            data: { foundUser, encodedToken },
        } = await axios.post("/api/auth/login", {
            email: email,
            password: password,
        });

        return { status, foundUser, encodedToken };
    } catch (e) {
        return { status: 404, foundUser: "", encodedToken: "" };
    }
};

export { loginUser };