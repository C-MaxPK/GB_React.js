import { ADD_CHAT_ITEM, DELETE_CHAT_ITEM } from "./types/chatsTypes";

const initialState = [
    {'id': 'id0', 'name': 'чатик 1'},
    {'id': 'id1', 'name': 'чатик 2'},
    {'id': 'id2', 'name': 'чатик 3'}
];

const chatReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CHAT_ITEM:
            return [...state, {id: payload.id, name: payload.name}];
        case DELETE_CHAT_ITEM:
            return [...state.filter(el => el.id !== payload)];
        default:
            return state;
    }
};

export default chatReducer;
