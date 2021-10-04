import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ButtonGroup, Button } from '@material-ui/core';
import ApiNews from "../Components/ApiNews/ApiNews";
import Chats from "../Components/Chats/Chats";
import Error from "../Components/Error/Error";
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
                    <Button><Link to={'/apinews'}>Ссылка на API News</Link></Button>
                </ButtonGroup>

                <Switch>
                    <Route exact path="/" render={() => <Home firstProp={message} />} />
                    <Route exact path="/profile" component={Profile} />
                    <Route path="/chats" component={Chats} />
                    <Route exact path="/apinews" component={ApiNews} />
                    <Route render={() => <p>Not Found 404</p>} />
                </Switch>

                <Error />
            </Router>
        </>
    )
};

export default RootRouter;
