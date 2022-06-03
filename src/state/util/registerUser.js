import axios from "axios";

const registerUser = async({ email, password, firstName, lastName }) => {
    try {
        const res = await axios.post("/api/auth/signup", {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        });
        console.log({...res });
        return res.status;
    } catch (e) {
        return e.response.status;
    }
};

export { registerUser };