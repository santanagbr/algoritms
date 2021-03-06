function findDigitsInBinary (number) {
  const binaryAcc = []

  if (number < 1) return 0

  while (number > 0) {
    const restOfNumber = number % 2
    binaryAcc.push(restOfNumber)

    number = Math.floor(number / 2)
  }

  return binaryAcc.reverse().join('')
}

module.exports = {
  findDigitsInBinary
}
