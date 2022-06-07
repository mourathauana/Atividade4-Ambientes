listaMDC = require('../algoritmos/MaximoDivisorComum')

test('O MDC entre 4 e 10 é 2', () => {
    expect(listaMDC([4, 10])).toBe(2);
});
  
test('O MDC entre 3, 9, 12 é 3', () => {
      expect(listaMDC([3,9,12])).toBe(3);
});