const { fizzBuzz } = require('../../src/fizzBuzz');

describe('fizzBuzz', () => {
  it('Should return expected fizz buzz array', () => {
    const number = 15;
    const expectedArray = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'];

    const fizzBuzzResult = fizzBuzz(number);
    expect(fizzBuzzResult).toEqual(expectedArray);
  });
});
