const { checkSieve } = require('../../src/sieveOfEratosthenes');

describe('sieveOfEratosthenes', () => {
  test('should return prime numbers', () => {
    const final = 100;
    // eslint-disable-next-line max-len
    const expectedArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const sieve = checkSieve(final);
    expect(sieve).toEqual(expectedArray);
  });
});
