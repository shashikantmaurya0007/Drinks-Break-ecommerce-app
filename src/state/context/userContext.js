import axios from "axios";
import { useContext, createContext, useEffect } from "react";

const user = {
  firstName: "",
  lastName: "",
  encodedToken: "",
};
const usercontext = createContext(user);
const useUser = () => useContext(usercontext);
const getTokenandUserDetails = async () => {
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

  user.firstName = firstName;
  user.lastName = lastName;
  user.encodedToken = encodedToken;
  localStorage.setItem("token", encodedToken);
  //   localStorage.setItem("encodedToken", encodedToken);
};

const UserProvider = ({ children }) => {
  useEffect(() => {
    (async () => {
      await getTokenandUserDetails();
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
