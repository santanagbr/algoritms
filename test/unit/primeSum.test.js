const { primeSum } = require('../../src/primeSum');

describe('primeSum', () => {
  test('Should return primes to sum 184', () => {
    const number = 184;
    const expectedNumbers = [3, 181];
    const primes = primeSum(number);

    expect(primes).toEqual(expectedNumbers);
  });
});
