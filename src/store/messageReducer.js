import { ADD_MESSAGE_ITEM } from "./types/messageType";

const initialState = {
    id0: [{id: 0, author: 'Автор Авторович', message: 'Есть кто живой?'},],
    id1: [{id: 0, author: 'Писатель Писателевич', message: 'Всем привет!'}, {id: 1, author: 'Писарчук', message: 'Здароу'}],
    id2: []
};

const messageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE_ITEM:
            if (state[payload.chatId] !== undefined) {
                return {...state, [payload.chatId]: [...state[payload.chatId], {id: state[payload.chatId].length, author: payload.author, message: payload.message}]};
            } else {
                return {...state, [payload.chatId]: [{id: 0, author: payload.author, message: payload.message}]};
            }
        default:
            return state;
    }
};

export default messageReducer;
