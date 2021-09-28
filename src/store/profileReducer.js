import { ADD_PROFILE_ITEM, DELETE_PROFILE_ITEM } from "./types/profileTypes";
import { CHANGE_CHECK_MAILING } from "./types/checkMailingType";

const initialState = {
    profileList: [{id: 0, name: 'Саша'}, {id: 1, name: 'Маша'}, {id: 2, name: 'Глаша'}],
    checkMailing: false
};

const profileReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PROFILE_ITEM:
            return {...state, profileList: [...state.profileList, {id: state.profileList.length, name: payload}]};
        case DELETE_PROFILE_ITEM:
            return {...state, profileList: state.profileList.filter(el => el.id !== payload)};
        case CHANGE_CHECK_MAILING:
            return {...state, checkMailing: payload};
        default:
            return state;
    }
};

export default profileReducer;
