import { ADD_API_NEWS } from "./types/apiNewsType";

const initialState = {
    theme: ['national', 'business', 'sports', 'world', 'politics', 'technology', 'startup', 'entertainment', 'miscellaneous', 'hatke', 'science', 'automobile', 'несуществующий GET запрос'],
    news: []
};

const apiNewsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_API_NEWS:
            return {...state, news: [...payload]};
        default:
            return state;
    }
};

export default apiNewsReducer;
