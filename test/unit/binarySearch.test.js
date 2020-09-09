const { recursiveBinarySearch } = require('../../src/binarySearch');

describe('binarySearch', () => {
  const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('should return position of the number', () => {
    const expectedValue = 1;
    const key = 2;

    const keyPosition = recursiveBinarySearch(key, vector);
    expect(keyPosition).toEqual(expectedValue);
  });

  test('should return -1 when number doesn\'t exists in array', () => {
    const expectedValue = -1;
    const key = 11;

    const keyPosition = recursiveBinarySearch(key, vector);
    expect(keyPosition).toEqual(expectedValue);
  });
});
