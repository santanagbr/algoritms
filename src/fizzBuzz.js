function defineFizzBuzz (number) {
  const fizzNum = 3
  const buzzNum = 5

  if (number % fizzNum === 0 && number % buzzNum === 0) {
    return 'FizzBuzz'
  } else {
    if (number % buzzNum === 0) {
      return 'Buzz'
    } else if (number % fizzNum === 0) {
      return 'Fizz'
    } else {
      return String(number)
    }
  }
}

function fizzBuzz (A) {
  const fizzBuzzArray = []
  for (let i = 1; i <= A; i++) {
    fizzBuzzArray.push(defineFizzBuzz(i))
  }

  return fizzBuzzArray
}

module.exports = {
  fizzBuzz
}
