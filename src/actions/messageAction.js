import { ADD_MESSAGE_ITEM } from "../store/types/messageType";

export const addMessageItem = (obj) => ({
    type: ADD_MESSAGE_ITEM,
    payload: obj
});
