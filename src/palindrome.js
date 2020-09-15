function isPalindrome (A) {
  const AArray = ('' + A).split('')
  const finalPosition = AArray.length - 1

  for (let i = 0; i < AArray.length / 2; i++) {
    if (AArray[finalPosition - i] !== AArray[i]) {
      return false
    }

    return true
  }
}

module.exports = {
  isPalindrome
}
