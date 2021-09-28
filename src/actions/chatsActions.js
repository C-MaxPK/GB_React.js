import { ADD_CHAT_ITEM, DELETE_CHAT_ITEM } from "../store/types/chatsTypes";

export const addChatItem = (obj) => ({
    type: ADD_CHAT_ITEM,
    payload: obj
});

export const deleteChatItem = (id) => ({
    type: DELETE_CHAT_ITEM,
    payload: id
});
