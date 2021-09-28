import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    chatReducer,
    messageReducer,
    profileReducer
});

const persistConfig = {key: 'root', storage: storage, blacklist: ['profileReducer']};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
