import { USER_AUTH_ACTION } from "../action";
import { user_auth_initialstate } from "../initalstate";
// isLoggedIn: false,
//     firstName: "",
//     encodedToken: "",
// };

const userAuthReducer = (prevstate, { type, payload }) => {
    switch (type) {
        case USER_AUTH_ACTION.INITAL_RELOAD:
            {
                return payload;
            }
        case USER_AUTH_ACTION.LOGIN_SUCCESSFULL:
            {
                return payload;
            }

        case USER_AUTH_ACTION.LOGOUT_SUCCESSFULL:
            {
                return {...user_auth_initialstate };
            }
    }
};