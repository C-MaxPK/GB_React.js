import { LOADING_ON } from "./types/loaderSpinnerType";

const initialState = {
    loading : false
};

const loaderSpinnerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOADING_ON:
            return {...state, loading: payload};
        default:
            return state;
    }
};

export default loaderSpinnerReducer;
