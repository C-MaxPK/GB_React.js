import { useState } from 'react';
import { Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { addProfileItem, deleteProfileItem } from '../../actions/profileListActions';
import { changeCheckMailing } from '../../actions/checkMailingAction';
import './profile.css';

const Profile = () => {
    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();
    const profiles = useSelector((state) => state.profileReducer.profileList);
    const mailing = useSelector((state) => state.profileReducer.checkMailing);
    
    const addHandler = () => {
        dispatch(addProfileItem(textInput));
        setTextInput('');
    };
    const deleteHandler = (id) => {
        // dispatch({type: 'DELETE_PROFILE_ITEM', payload: id});
        dispatch(deleteProfileItem(id));
    };
    const checkboxHandler = (e) => {
        dispatch(changeCheckMailing(e.target.checked));
    };

    return (
        <>
            <h2>
                Страница профиля
            </h2>
            <label>
                Массовая подписка на рассылку спама
                <Checkbox color="success" onChange={e => checkboxHandler(e)} />
            </label>
            {mailing ? <p className="mailingOn">Подписка включена</p> : <p className="mailingOff">Подписка выключена</p>}


            { /* оставлю пока для примера */ }
            {profiles.map(el => 
                <div key={el.id}>
                    {el.name}
                    <button onClick={() => deleteHandler(el.id)}>Удалить</button>    
                </div>
            )}
            <input value={textInput} onChange={e => setTextInput(e.target.value)} />
            <button onClick={addHandler}>Добавить</button>
        </>
    )
};

export default Profile;
