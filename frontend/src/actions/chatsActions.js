import { SET_CHATS } from "../store/types/chatsType";

export const addChatItem = (obj) => (dispatch) => {
    fetch('http://localhost:3001/chats', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(newData => dispatch(setChats(newData)));
};

export const deleteChatItem = (id) => (dispatch) => {
    fetch(`http://localhost:3001/chats?id=${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(newData => dispatch(setChats(newData)));
};

export const setChats = (obj) => ({
    type: SET_CHATS,
    payload: obj
})

export const fetchChats = () => (dispatch) => {
    fetch('http://localhost:3001/chats')
        .then(response => response.json())
        .then(data => dispatch(setChats(data)));
}
