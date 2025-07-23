import { generateRandomId } from '../helpers/generateRandomId';
import React from 'react';
describe('generateRandomId', () => {
  it('deve gerar um id no formato UUID', () => {
    const id = generateRandomId();
    expect(id).toMatch(/[a-f0-9\-]{36}/);
    expect(id).not.toBe(generateRandomId()); // IDs devem ser diferentes
  });
}); 