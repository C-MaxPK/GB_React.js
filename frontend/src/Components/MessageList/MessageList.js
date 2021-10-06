import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './messageList.css';

const MessageList = () => {
    const { chatId } = useParams();
    const messages = useSelector((state) => state.messageReducer[chatId]);

    return (
        <div className="messageList">
            {messages.map((obj) => (
                <p key={obj.id}> <span>{ obj.author }:</span> { obj.message } </p>
            ))}
        </div>
    )
};

export default MessageList;
