import { memo, useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessageItem } from '../../actions/messageAction';
import './style.css';

const Form = () => {
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const { chatId } = useParams();
    const messages = useSelector((state) => state.messageReducer[chatId]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (messages.length) {
            setTimeout(() => {
                console.log(`Я робот-автоответчик, а вы: ${messages[messages.length - 1].author} - кожаный человек`);
            }, 1500);
        }
    },[messages]);

    const submitFormHandler = (e) => {
        e.preventDefault();
        dispatch(addMessageItem({chatId: chatId, author: inputAuthor, message: inputMessage}));
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

export default memo(Form);
