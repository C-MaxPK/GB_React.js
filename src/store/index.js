import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
    chatReducer,
    messageReducer,
    profileReducer
});

export const store = createStore(reducers, composeWithDevTools());
