const { isPalindrome } = require('../../src/palindrome');

describe('isPalindrome', () => {
  it('Should return true for palindrome integer', () => {
    const number = 122221;

    const result = isPalindrome(number);

    expect(result).toEqual(true);
  });

  it('Should return false for non-palindrome integer', () => {
    const number = 122222;

    const result = isPalindrome(number);

    expect(result).toEqual(false);
  });
});
