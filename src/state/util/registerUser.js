import axios from "axios";

const registerUser = async(user) => {
    try {
        const res = await axios.post("/api/auth/signup", user);
        return res.status;
    } catch (e) {
        return e.response.status;
    }
};

export { registerUser };