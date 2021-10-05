import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from '../../actions/userActions';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorFlg, setErrorFlg] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { error, user } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (error) {
            setEmail('');
            setPassword('');
            setErrorFlg((prev) => !prev);
        }
    }, [error]);

    useEffect(() => {
        if (user) {
            history.push('/home');
        }
    }, [user]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(userLogin({ email, password }));
        dispatch(fetchUser({ email, password }));
        setErrorFlg(false);
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
                <button type="submit">LogIn</button>
            </form>
            {errorFlg && (<div>ERROR AUTH</div>)}
        </>
    )
};

export default Auth;
