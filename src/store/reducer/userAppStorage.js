import { LOG_ADMIN_IN, LOGIN_ADMIN, LOG_USER_IN, LOGIN_USER } from "../action/userAppStorage";


const initialState = {
    adminToken: "",
    //expiresIn: "",
    admin: null,
    //user session credentials
    userToken: '',
    user: null,
    notifications: []
}



export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_ADMIN_IN:
            return {
                ...state,
                admin: action.payload.admin,
                adminToken: action.payload.adminToken
            }
            break;

        case LOGIN_ADMIN:
            return {
                ...state,
                admin: action.payload.admin,
                adminToken: action.payload.adminToken
            }

            break;

        case LOG_USER_IN:
            return {
                ...state,
                user: action.payload.admin,
                userToken: action.payload.userToken,
                notifications: action.payload.notification
            }
            break;

        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                userToken: action.payload.token,
            }

            break;


        default:
            return state
            break;
    }

}

