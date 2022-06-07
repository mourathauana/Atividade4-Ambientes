contar = require('../algoritmos/contador')

test('Existem 0 números entre 0 e 3', () => {
    expect(contar(4)).toBe(4);
});
test('Existem 8 números entre 0 e 8,77', () => {
    expect(contar(8,77)).toBe(8);
});
  
