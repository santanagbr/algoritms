function isPalindrome (A) {
  const reverseArray = ('' + A).split('')
  for (let i = 0; i < reverseArray.length / 2; i++) {
    const finalPosition = reverseArray.length - 1
    const aux = reverseArray[finalPosition - i]
    reverseArray[finalPosition - i] = reverseArray[i]
    reverseArray[i] = aux
  }

  const formattedReverseArray = Number(reverseArray.join(''))

  return formattedReverseArray === A
}

const number = 1221

isPalindrome(number)

// module.exports = {
//   isPalindrome
// }
