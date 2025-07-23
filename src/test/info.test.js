import { render } from '@testing-library/react';
import React from 'react';
import Info from '../pages/infoPage/Info';
describe('Info', () => {
    it('deve renderizar campo de busca', () => {
        const { getByPlaceholderText } = render(<Info />);
        expect(getByPlaceholderText('Digite o nome do sorvete...')).toBeInTheDocument();
    });
}); 