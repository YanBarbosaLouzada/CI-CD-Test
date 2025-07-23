import { generateAtualDate } from '../helpers/generateAtualDate';
describe('generateAtualDate', () => {
  it('deve retornar a data no formato dd/mm/yyyy', () => {
    const date = generateAtualDate();
    expect(date).toMatch(/\d{2}\/\d{2}\/\d{4}/);
  });
}); 