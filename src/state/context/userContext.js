import axios from "axios";
import { user_auth_initialstate } from "../initalstate";
import { USER_AUTH_ACTION } from "../action";
import {
  useContext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { userAuthReducer } from "../index";
// isLoggedIn: false,
//     firstName: "",
//     encodedToken: "",

const usercontext = createContext(user_auth_initialstate);
const useUser = () => useContext(usercontext);

const UserProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(
    userAuthReducer,
    user_auth_initialstate
  );

  useEffect(() => {
    (async () => {
      await userDispatch({
        type: USER_AUTH_ACTION.INITAL_RELOAD,
        payload:
          JSON.parse(localStorage.getItem("loginDetails")) ||
          user_auth_initialstate,
      });
    })();
  }, []);

  return (
    <usercontext.Provider value={{ user, userDispatch }}>
      {children}
    </usercontext.Provider>
  );
};

export { UserProvider, useUser };
