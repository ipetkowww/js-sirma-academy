function uniqueCodes(limit1, limit2, limit3) {
  let foundValid = false;

  for (let first = 1; first <= limit1; first++) {
    if (first % 2 !== 0) continue;

    for (let second = 1; second <= limit2; second++) {
      if (!isPrime(second) || second > 7) continue;

      for (let third = 1; third <= limit3; third++) {
        if (third % 2 !== 0) continue;

        console.log(`${first} ${second} ${third}`);
        foundValid = true;
      }
    }
  }
  if (!foundValid) {
    console.log("No valid codes found");
  }
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

uniqueCodes(3, 5, 5);
console.log("------------------------");
uniqueCodes(6, 2, 6);
