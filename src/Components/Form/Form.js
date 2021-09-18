import { useEffect, useState, useRef, memo } from 'react';
import { TextField, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import './style.css';

const Form = ({ setMessageList }) => {
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, [inputAuthor]);

    const submitFormHandler = (e) => {
        e.preventDefault();
    
        setMessageList((prevState) => [...prevState, {'id': prevState.length, 'author': inputAuthor, 'message': inputMessage}]);

        setInputAuthor('');
        setInputMessage('');
    };

    return (
        <form>
            <input ref={ref} value={inputAuthor} onChange={e => setInputAuthor(e.target.value)} placeholder='Имя' />
            {/* <TextField id="standard-basic" label="Имя" variant="standard" value={inputAuthor} onChange={e => setInputAuthor(e.target.value)} /> 
            для выполнения задания №2 пришлось красивый input закоментить, т.к. попробовал автофокус
            (что собственно ты и говорил на вебинаре) - не работает ref.current.focus() с TextField*/}
            <TextField id="standard-basic" label="Сообщение" variant="standard" value={inputMessage} onChange={e => setInputMessage(e.target.value)} />
            <Button variant="contained" onClick={e => submitFormHandler(e)}>Отправить</Button>
        </form>
    )
};

Form.propTypes = {
    setMessageList: PropTypes.func.isRequired
};

export default memo(Form);
