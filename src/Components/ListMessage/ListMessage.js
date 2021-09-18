
const ListMessage = ({ messageList }) => {
    
    return (
        <div className="messageList">
            {messageList.map((obj) => (
                <p key={obj.id}> { obj.author } - { obj.message } </p>
            ))}
        </div>
    )
};

export default ListMessage;
