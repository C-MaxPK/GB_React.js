import { CHANGE_CHECK_MAILING } from "./types/checkMailingType";

const initialState = {
    checkMailing: false
};

const profileReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_CHECK_MAILING:
            return {...state, checkMailing: payload};
        default:
            return state;
    }
};

export default profileReducer;
