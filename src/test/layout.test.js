import { render } from '@testing-library/react';
import Layout from '../pages/Layout';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import { MemoryRouter } from 'react-router-dom';
describe('Layout', () => {
  it('deve renderizar a Navbar', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </Provider>
    );
    expect(container.querySelector('.nav')).toBeInTheDocument();
  });
}); 