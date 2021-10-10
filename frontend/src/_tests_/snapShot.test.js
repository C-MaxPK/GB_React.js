import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';
import { store } from '../store';
import { changeCheckMailing } from '../actions/checkMailingAction';
import profileReducer, { initialState } from '../store/userReducer';

describe('test reducers', () => {
    it('test profileReducer', () => {
        const reducer = profileReducer(initialState, changeCheckMailing());
        expect(reducer).toMatchSnapshot();
    });
});

describe('test components', () => {
    it('test Home component', () => {
        const component = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
         expect(component).toMatchSnapshot();
    });

    it('test Auth component', () => {
        const component = render(
            <Provider store={store}>
                <Auth />
            </Provider>
        );
         expect(component).toMatchSnapshot();
    });
});
