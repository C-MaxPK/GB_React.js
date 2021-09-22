import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteProfileItem, addProfileItem } from '../../actions/profileListActions';
import { changeCheckMailing } from '../../actions/checkMailingAction';
import './profile.css';

const Profile = () => {
    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();
    const profiles = useSelector((state) => state.profileList);
    const mailing = useSelector((state) => state.checkMailing);
    
    const deleteHandler = (id) => {
        // dispatch({type: 'DELETE_PROFILE_ITEM', payload: id});
        dispatch(deleteProfileItem(id));
    };
    const addHandler = () => {
        dispatch(addProfileItem(textInput));
        setTextInput('');
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
                <input type="checkbox" onChange={e => checkboxHandler(e)} />
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
