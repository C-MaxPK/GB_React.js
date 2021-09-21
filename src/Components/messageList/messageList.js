import { useParams } from "react-router-dom";
import './messageList.css';

const MessageList = ({ messageList }) => {
    const { chatId } = useParams();
    const filterMessageList = messageList.filter((item) => {
        return item.idC === chatId;
    });
    
    return (
        <div className="messageList">
            {filterMessageList.map((obj) => (
                <p key={obj.idM}> <span>{ obj.author }:</span> { obj.message } </p>
            ))}
        </div>
    )
};

export default MessageList;
