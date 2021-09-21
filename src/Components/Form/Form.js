import { memo, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useParams } from "react-router-dom";
import './style.css';

const Form = ({ setMessageList }) => {
    const { chatId } = useParams();
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const submitFormHandler = (e) => {
        e.preventDefault();
        setMessageList((prevState) => [...prevState, {'idM': prevState.length, 'idC': chatId, 'author': inputAuthor, 'message': inputMessage}]);
        setInputAuthor('');
        setInputMessage('');
    };

    return (
        <>
            <form>
                <TextField id="standard-basic" label="Имя" variant="standard" value={inputAuthor} onChange={e => setInputAuthor(e.target.value)} />
                <TextField id="standard-basic" label="Сообщение" variant="standard" value={inputMessage} onChange={e => setInputMessage(e.target.value)} />
                <Button variant="contained" onClick={e => submitFormHandler(e)}>Отправить</Button>
            </form>
        </>
    )
};

Form.propTypes = {
    setMessageList: PropTypes.func.isRequired
};

export default memo(Form);
