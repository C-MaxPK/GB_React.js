import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './profileReducer';

export const store = createStore(profileReducer, composeWithDevTools());
