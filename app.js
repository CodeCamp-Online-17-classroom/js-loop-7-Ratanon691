function findPrimeNumbers(start, end) {
    function isPrime(num) {
        if (num < 2) return false 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false
        }
        return true
    }

    const primeNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers
}


console.log(findPrimeNumbers(10, 30)); 
console.log(findPrimeNumbers(1, 10)); 
console.log(findPrimeNumbers(15, 17)); 
