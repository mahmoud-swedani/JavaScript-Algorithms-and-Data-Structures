// Sum All Primes
function sumPrimes(num1) {
  let a = 0;
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
  
  for (let i = 2; i <= num1; i++) {
    if (isPrime(i)) {
      a+=i
    }
  }

  return a;
}

console.log(sumPrimes(977));