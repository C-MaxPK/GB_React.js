import { Redirect, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import MessageList from '../MessageList/MessageList';

const Chat = () => {
    const { chatId } = useParams();
    const chatList = useSelector((state) => state.messageReducer);

    if (!chatList[chatId]) {
        return <Redirect to="/chats" />;
    }

    return (
        <>
            <Form />
            <MessageList />
        </>
    )
};

export default Chat;