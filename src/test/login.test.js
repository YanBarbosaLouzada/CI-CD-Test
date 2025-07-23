import { render } from '@testing-library/react';
import LoginPage from '../pages/login/LoginPage';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import { MemoryRouter } from 'react-router-dom';
describe('LoginPage', () => {
    it('deve renderizar título de login', () => {
        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
        expect(getByText(/login/i)).toBeInTheDocument();
    });
}); 