fibonacci = require('../algoritmos/Fibonacci')

test('Os 3 primeiros números são os corretos', () => {
    expect(fibonacci(3)).toMatchObject([ 0, 1, 1]);
});
  
test('Os 6 primeiros números são os corretos', () => {
      expect(fibonacci(6)).toMatchObject([0, 1, 1, 2, 3, 5]);
});