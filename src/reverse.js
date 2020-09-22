function reverse (A) {
  const numberAtArray = ('' + A).split('')
  const isNegative = numberAtArray[0] === '-'

  if (isNegative) {
    numberAtArray.shift()
  }

  const finalPosition = numberAtArray.length - 1

  for (let i = 0; i < Math.round(numberAtArray.length / 2); i++) {
    const aux = numberAtArray[finalPosition - i]
    numberAtArray[finalPosition - i] = numberAtArray[i]
    numberAtArray[i] = aux
  }

  if (isNegative) {
    numberAtArray.unshift('-')
  }

  const reverseValue = +numberAtArray.join('')

  if (reverseValue < -2147483648 || reverseValue > 2147483647) {
    return 0
  }

  return reverseValue
}

const number = -1234567891
const teste = reverse(number)
console.log(teste)

module.exports = {
  reverse
}
