import axios from "axios";
import { useContext, createContext, useEffect, useState } from "react";

const user1 = {
  firstName: "",
  lastName: "",
  encodedToken: "",
};
const usercontext = createContext(user1);
const useUser = () => useContext(usercontext);
const getTokenandUserDetails = async (setUser) => {
  const {
    data: {
      foundUser: { firstName, lastName },
      encodedToken,
    },
  } = await axios.post("/api/auth/login", {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });
  //

  setUser((prev) => {
    return {
      ...prev,
      firstName: firstName,
      lastName,
      encodedToken: encodedToken,
    };
  });
  localStorage.setItem("token", encodedToken);
  //   localStorage.setItem("encodedToken", encodedTok  en);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    encodedToken: "",
  });
  useEffect(() => {
    (async () => {
      await getTokenandUserDetails(setUser);
    })();
  }, []);

  return (
    <usercontext.Provider value={{ user, useUser }}>
      {" "}
      {children}
    </usercontext.Provider>
  );
};

export { UserProvider, useUser };
