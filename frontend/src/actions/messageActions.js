import { SET_MESSAGES } from "../store/types/messageType";

export const addMessageItem = (obj) => (dispatch) => {
    fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(newData => dispatch(setMessages(newData)));
};

export const setMessages = (obj) => ({
    type: SET_MESSAGES,
    payload: obj
})

export const showAutoAnswer = (chatId) => (dispatch, getState) => {
    setTimeout(() => {
        console.log(`Я робот-автоответчик, а вы: ${getState().messageReducer[chatId][getState().messageReducer[chatId].length - 1].author} - кожаный человек`);
    }, 1500);
};

export const fetchMessages = () => (dispatch) => {
    fetch('http://localhost:3001/messages')
        .then(response => response.json())
        .then(data => dispatch(setMessages(data)));
}

export const deleteMessagesChat = (id) => (dispatch) => {
    fetch(`http://localhost:3001/messages?id=${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(newData => dispatch(setMessages(newData)));
};
