import { SET_CHATS } from "./types/chatsType";

const initialState = null;

const chatReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CHATS:
            return payload;
        default:
            return state;
    }
};

export default chatReducer;
