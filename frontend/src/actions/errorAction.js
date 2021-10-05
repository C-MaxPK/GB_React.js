import { SET_ERROR } from "../store/types/errorType";

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err
});
