import { useEffect, useState } from "react";
import { Box, Button, Modal, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from '../../actions/userActions';
import './auth.css';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorFlg, setErrorFlg] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { error, user } = useSelector(state => state.userReducer);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

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
        <Modal open={true} >
            <Box sx={style}>
                <form className='formAuth' onSubmit={submitHandler}>
                    <TextField value={email} onChange={e => setEmail(e.target.value)} required id="outlined-required" label="E-Mail" type="email" />
                    <TextField value={password} onChange={e => setPassword(e.target.value)} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                    <Button type='submit' variant="outlined">LogIn</Button>
                </form>
                {errorFlg && (<div>ERROR AUTH</div>)}
            </Box>
        </Modal>
    )
};

export default Auth;
