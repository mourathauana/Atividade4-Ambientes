quicksort = require('../algoritmos/Ordenacao')


test('Ordena Array', () => {
    expect(quicksort([10, 4, 2])).toMatchObject([2, 4, 10]);
});
  
test('Ordena Array', () => {
      expect(quicksort([18, 65, 37])).toMatchObject([18, 37, 65]);
});