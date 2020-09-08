const { findDigitsInBinary } = require('../../src/convertToBinary');

describe('convertToBinary', () => {
  test('Should return 125 in binary', () => {
    const numberToConvert = 125;
    const expectedValue = '1111101';

    const convertedNumber = findDigitsInBinary(numberToConvert);
    expect(convertedNumber).toEqual(expectedValue);
  });
});
