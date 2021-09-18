import Message from "./Message/Message";
import { useEffect, useState } from 'react';
import Form from "./Form/Form";
import ListMessage from "./ListMessage/ListMessage";
import ListChat from "./ListChat/ListChat";
import './style.css';

const message = 'Какая-то социальная сеть';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList] = useState([{'id': 0, 'name': 'чатик 1'}, {'id': 1, 'name': 'чатик 2'}, {'id': 3, 'name': 'чатик 3'},]);

  useEffect(() => {

    if (messageList.length) {
      setTimeout(() => {
        console.log(`Я робот, а вы: ${messageList[messageList.length - 1].author} - кожаный человек`);
      }, 1500);
    }

  },[messageList]);

  return (
    <>
      <Message firstProp={message} />

      <div className="container">
        <div className="chatList">
          <ListChat chatList={chatList}/>
        </div>
        <div className="messageBlock">
          <Form setMessageList={setMessageList}/>
          <ListMessage messageList={messageList}/>
        </div>
      </div>
      
    </>
  );
}

export default App;
