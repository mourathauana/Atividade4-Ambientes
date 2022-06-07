const calcularSomatorio = require('../algoritmos/Somatorio');

test('A soma entre 7, 9,10', () => {
    expect(calcularSomatorio([7, 9, 10])).toBe(26);
});
  
test('A soma entre -3 e 3', () => {
      expect(calcularSomatorio([-3, 3])).toBe(0);
});