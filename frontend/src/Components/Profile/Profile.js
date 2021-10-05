import { Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { changeCheckMailing } from '../../actions/checkMailingAction';
import './profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const mailing = useSelector((state) => state.profileReducer.checkMailing);
    
        const checkboxHandler = (e) => {
        dispatch(changeCheckMailing(e.target.checked));
    };

    return (
        <>
            <h2>Страница профиля</h2>
            <label>
                Массовая подписка на рассылку спама
                <Checkbox color="success" onChange={e => checkboxHandler(e)} />
            </label>
            {mailing ? <p className="mailingOn">Подписка включена</p> : <p className="mailingOff">Подписка выключена</p>}
        </>
    )
};

export default Profile;
