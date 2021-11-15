import { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ButtonGroup, Button } from '@material-ui/core';
import ApiNews from "../Components/ApiNews/ApiNews";
import Chats from "../Components/Chats/Chats";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import LoaderSpinner from "../Components/LoaderSpinner/LoaderSpinner";
import Profile from "../Components/Profile/Profile";

const message = 'Какая-то социальная сеть';

const RootRouter = () => {
    const history = useHistory();
    const users = useSelector(state => state.userReducer.user);
    
    useEffect(() => {
        if (!users) {
            history.push('/');
        }
    });

    return (
        <Router>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button><Link to={'/home'}>Домашняя страница </Link></Button>
                <Button><Link to={'/profile'}>Ссылка на профиль </Link></Button>
                <Button><Link to={'/chats'}>Ссылка на чатики </Link></Button>
                <Button><Link to={'/apinews'}>Ссылка на API News</Link></Button>
            </ButtonGroup>

            <Switch>
                <Route exact path="/home" render={() => <Home firstProp={message} />} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/chats" component={Chats} />
                <Route exact path="/apinews" component={ApiNews} />
            </Switch>

            <LoaderSpinner />
            <Error />
        </Router>
    )
};

export default RootRouter;
