import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

const SecureRoute = ({ ...rest }) => {
    const { user } = useSelector(state => state.userReducer);
    return user ? <Route {...rest} /> : <Redirect to={{ pathname: '/' }} />;
};

export default SecureRoute;
