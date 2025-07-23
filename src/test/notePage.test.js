import { render } from '@testing-library/react';
import NotePage from '../pages/notes/NotePage';
import React from 'react';
describe('NotePage', () => {
    it('deve renderizar o container principal', () => {
        const { container } = render(<NotePage />);
        expect(container.querySelector('.notesPageContainer')).toBeInTheDocument();
    });
}); 