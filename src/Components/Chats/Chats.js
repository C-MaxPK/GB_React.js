import { useEffect, useState } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from '../Form/Form';
import MessageList from '../messageList/messageList';
import './chats.css';

const Chats = () => {
    const initialMessages = [
        {'idM': 0, 'idC': '1', 'author': 'Автор Авторович', 'message': 'Есть кто живой?'},
        {'idM': 1, 'idC': '2', 'author': 'Писатель Писателевич', 'message': 'Всем привет!'},
        {'idM': 2, 'idC': '2', 'author': 'Писарчук', 'message': 'Здароу'}
    ];
    const [messageList, setMessageList] = useState(initialMessages);
    const [chatList] = useState([
        {'id': 1, 'name': 'чатик 1'},
        {'id': 2, 'name': 'чатик 2'},
        {'id': 3, 'name': 'чатик 3'}
    ]);
    
    useEffect(() => {
        if (messageList.length) {
            setTimeout(() => {
                console.log(`Я робот, а вы: ${messageList[messageList.length - 1].author} - кожаный человек`);
            }, 1500);
        }
    },[messageList]);

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
                                    </Link >
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className="messageBlock">
                    <Route path="/chats/:chatId">
                        <Form setMessageList={setMessageList} />
                        <MessageList messageList={messageList} />
                    </Route>
                </div>
            </Router>
        </div>
    )
};

export default Chats;
