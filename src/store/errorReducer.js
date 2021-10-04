import { SET_ERROR } from "./types/errorType";

const initialState = null;

const errorReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_ERROR:
            return payload;
        default:
            return state;
    }
};

export default errorReducer;
