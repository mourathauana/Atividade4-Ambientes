numeroEPrimo = require('../algoritmos/NumeroEPrimo')

test('O número 6 não é primo', () => {
    expect(numeroEPrimo(6)).toBe(false);
});
  
test('O número 17 é primo', () => {
    expect(numeroEPrimo(17)).toBe(true);
});
  