import { SET_MESSAGES } from "./types/messageType";

const initialState = null;

const messageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_MESSAGES:
            return payload;
        default:
            return state;
    }
};

export default messageReducer;
