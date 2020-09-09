// Given an even number ( greater than 2 ), return two prime
// numbers whose sum will be equal to given number.

// NOTE A solution will always exist. read Goldbach’s conjecture

// Example:
// Input : 4
// Output: 2 + 2 = 4

// If there are more than one solutions possible, return the
// lexicographically smaller solution.

// If [a, b] is one solution with a <= b,
// and [c,d] is another solution with c <= d, then
// [a, b] < [c, d]
// If a < c OR a==c AND b < d.

function isPrime (number) {
  const divisibles = []

  if (number < 2) return false

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) divisibles.push(i)
  }

  if (divisibles.length < 1) return true

  return false
}

function primeSum (A) {
  for (let i = 2; i <= A / 2; i++) {
    if (isPrime(i) && isPrime(A - i)) {
      return [i, A - i]
    }
  }
}

module.exports = {
  primeSum
}
