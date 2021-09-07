import Message from "./Components/Message/Message";

const message = 'Какой-то переданный текст.';

function App() {
  return (
    <div className="App">
      <Message firstProp={message}/>
    </div>
  );
}

export default App;
