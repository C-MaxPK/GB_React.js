import Message from "./Components/Message/Message";
import {useEffect, useState} from 'react';

const message = 'Какой-то переданный текст.';

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {

    messageList.length === 0 ? console.log('пока в массиве пусто') : 
    setTimeout(() => {
      alert(`Я робот, а вы: ${messageList[messageList.length - 1].author} - кожаный человек`);
    }, 1500);

  },[messageList]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const inputAuthor = document.querySelector('input[name="author"]').value;
    const inputMessage = document.querySelector('input[name="message"]').value;

    if (inputAuthor && inputMessage) {
      setMessageList((prevState) => [...prevState, {'id': prevState.length, 'author': inputAuthor, 'message': inputMessage}]);
    }
  };

  return (
    <div className="App">
      <Message firstProp={message} />
      <form>
          <input name="author" type="text" placeholder="Имя" />
          <input name="message" type="text" placeholder="Сообщение" />
          <button type="submit" onClick={e => submitFormHandler(e)}>Отправить</button>
      </form>
      <div className="messageList">
        {messageList.map((obj) => (
          <p key={obj.id}> {obj.author} - {obj.message} </p>
        ))}
      </div>
    </div>
  );
}

export default App;
