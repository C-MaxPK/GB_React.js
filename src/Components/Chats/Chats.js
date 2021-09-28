import { useState } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemText, TextField } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Chat from '../Chat/Chat';
import { addChatItem, deleteChatItem } from '../../actions/chatsActions';
import { addMessageItem } from '../../actions/messageAction';
import './chats.css';

const Chats = () => {
    const [inputAddChat, setInputAddChat] = useState('');
    const chatList = useSelector((state) => state.chatReducer);
    const dispatch = useDispatch();

    const addChatHandler = () => {
        dispatch(addChatItem({id: `id${chatList.length}`, name: inputAddChat}));
        dispatch(addMessageItem({chatId: `id${chatList.length}`, author: 'Бот', message: `Приветствую вас в чате "${inputAddChat}"`}));
        setInputAddChat('');
    };
    const deleteChatHandler = (id) => {
        dispatch(deleteChatItem(id));
    };

    return (
        <div className="chats">
            <Router>
                <div className="chatList">
                    <List>
                        {chatList.map((obj) => (
                            <ListItem key={obj.id}>
                                <ListItemButton>
                                    <Link to={`/chats/${obj.id}`}>
                                        <ListItemText primary={ obj.name } />
                                    </Link>
                                    <Button variant="outlined" color="error" size="small" onClick={() => deleteChatHandler(obj.id)}>Удалить</Button>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <TextField id="outlined-basic" label="Название чатика" variant="outlined" size="small" value={inputAddChat} onChange={e => setInputAddChat(e.target.value)} />
                    <Button variant="contained" color="success" size="small" onClick={addChatHandler}>Добавить</Button>
                </div>
                <div className="messageBlock">
                    <Route path="/chats/:chatId" component={Chat} />
                </div>
            </Router>
        </div>
    )
};

export default Chats;
