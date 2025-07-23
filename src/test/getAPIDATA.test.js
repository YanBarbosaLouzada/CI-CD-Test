import { renderHook, waitFor } from '@testing-library/react';
import { useGetAPIDATA } from '../hooks/getAPIDATA';
import React from 'react';
import axios from 'axios';

jest.mock('axios');

describe('useGetAPIDATA', () => {
    it('deve retornar dados de sorvete quando a API responde corretamente', async () => {
        const mockData = [{ id: 1, name: 'Chocolate' }];
        axios.get.mockResolvedValue({ status: 200, data: mockData });
        const { result } = renderHook(() => useGetAPIDATA('Chocolate'));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.sorveteData).toEqual(mockData);
        expect(result.current.error).toBeNull();
    });

    it('deve retornar erro quando a API falha', async () => {
        axios.get.mockRejectedValue(new Error('Erro de rede'));
        const { result } = renderHook(() => useGetAPIDATA('Morango'));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.sorveteData).toBeNull();
        expect(result.current.error).toBe('Erro de rede');
    });
}); 