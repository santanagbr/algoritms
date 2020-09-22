function gcd (A, B) {
  while (A !== B && B !== 0) {
    if (A > B) {
      A = A - B
    } else {
      B = B - A
    }
  }

  return A
}

const numberA = 2
const numberB = 0

const result = gcd(numberA, numberB)
console.log(result)
