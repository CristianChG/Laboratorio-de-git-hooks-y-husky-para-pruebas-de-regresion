const res = require('../res');

test('res 5 - 2 to equal 3', () => {
  expect(res(1, 2)).toBe(3);
});
