import { USER_LOGIN, USER_LOGOUT, SET_USER_ERROR } from "../store/types/userTypes";

export const userLogin = (user) => ({
    type: USER_LOGIN,
    payload: { ...user }
});

export const userLogout = () => ({
    type: USER_LOGOUT
});

export const userError = (text) => ({
    type: SET_USER_ERROR,
    payload: text
});

export const fetchUser = (user) => async (dispatch) => {
    const response = await fetch('http://localhost:3001/auth', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    console.log(data, 'data response');

    if (data) {
        dispatch(userLogin(user));
    } else {
        dispatch(userError('user not found'));
    }
};
