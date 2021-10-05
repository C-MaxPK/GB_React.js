import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import RootRouter from '../Router/Router';
import Auth from "./Auth/Auth";
import SecureRoute from "./SecureRoute/SecureRoute";
import './app.css';

function App() {
  const history = useHistory();
  
  return (
    <Router history={history}> {/* зачем здесь history (и без него норм работает) */}
        <Switch>
            <Route exact path="/" component={Auth} />
            <SecureRoute path="/home" component={RootRouter} />
        </Switch>
    </Router>
  );
}

export default App;
