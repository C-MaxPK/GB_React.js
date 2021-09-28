import { ADD_MESSAGE_ITEM } from "../store/types/messageType";

export const addMessageItem = (obj) => ({
    type: ADD_MESSAGE_ITEM,
    payload: obj
});
export const showAutoAnswer = (chatId) => (dispatch, getState) => {
    setTimeout(() => {
        console.log(`Я робот-автоответчик, а вы: ${getState().messageReducer[chatId][getState().messageReducer[chatId].length - 1].author} - кожаный человек`);
    }, 1500);
};