function isPrime (number) {
  const divisibles = []

  if (number < 2) return false

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) divisibles.push(i)
  }

  if (divisibles.length < 1) return true

  return false
}

function sieve (maxNumber) {
  const primes = []
  for (let i = 0; i <= maxNumber; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  return primes
}

sieve(100)
