import { USER_LOGIN, USER_LOGOUT, SET_USER_ERROR } from "./types/userTypes";

const initialState = {user: null, error: null};

const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_LOGOUT:
            return {user: null, error: null};
        case USER_LOGIN:
            return {user: payload, error: null};
        case SET_USER_ERROR:
            return {...state, error: payload};
        default:
            return state;
    }
};

export default userReducer;
