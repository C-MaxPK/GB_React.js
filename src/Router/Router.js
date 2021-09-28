import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ButtonGroup, Button } from '@material-ui/core';
import Chats from "../Components/Chats/Chats";
import Home from "../Components/Home/Home";
import Profile from "../Components/Profile/Profile";

const message = 'Какая-то социальная сеть';

const RootRouter = () => {

    return (
        <>
            <Router>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button><Link to={'/'}>Домашняя страница </Link></Button>
                    <Button><Link to={'/profile'}>Ссылка на профиль </Link></Button>
                    <Button><Link to={'/chats'}>Ссылка на чатики </Link></Button>
                </ButtonGroup>

                <Switch>
                    <Route exact path="/" render={() => <Home firstProp={message} />} />
                    <Route exact path="/profile" component={Profile} />
                    <Route path="/chats" component={Chats} />
                    <Route render={() => <p>Not Found 404</p>} />
                </Switch>
            </Router>
        </>
    )
};

export default RootRouter;
