import { Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { changeCheckMailing } from '../../actions/checkMailingAction';
import './profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const mailing = useSelector((state) => state.profileReducer.checkMailing);

    return (
        <>
            <h2>Страница профиля</h2>
            <label>
                Массовая подписка на рассылку спама
                <Checkbox color="success" onChange={() => dispatch(changeCheckMailing())} />
            </label>
            {mailing ? <p className="mailingOn">Подписка включена</p> : <p className="mailingOff">Подписка выключена</p>}
        </>
    )
};

export default Profile;
