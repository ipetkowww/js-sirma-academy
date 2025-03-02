function evenPairs(
  firstPairStar,
  secondPairStart,
  diffFirstPair,
  diffSecondPair
) {
  for (let i = firstPairStar; i <= firstPairStar + diffFirstPair; i++) {
    for (let j = secondPairStart; j <= secondPairStart + diffSecondPair; j++) {
      if (isPrime(i) && isPrime(j)) {
        console.log(`${i}${j}`);
      }
    }
  }
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

evenPairs(10, 20, 5, 5);
console.log("----------------------");
evenPairs(10, 30, 9, 6);
