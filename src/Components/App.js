import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ButtonGroup, Button } from '@material-ui/core';
import Chats from "./Chats/Chats";
import Message from "./Message/Message";
import Profile from "./Profile/Profile";
import './app.css';

const message = 'Какая-то социальная сеть';

function App() {

  return (
    <>
      <Router>

        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button><Link to={'/'}>Домашняя страница </Link></Button>
          <Button><Link to={'/profile'}>Ссылка на профиль </Link></Button>
          <Button><Link to={'/chats'}>Ссылка на чатики </Link></Button>
        </ButtonGroup>

        <Switch>
          <Route exact path="/" render={() => <Message firstProp={message} />} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/chats" component={Chats} />
          <Route render={() => <p>Неt такой страницы</p>} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
