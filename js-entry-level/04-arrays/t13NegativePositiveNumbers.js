function positiveNegativeNumbers(numbers) {
  const result = [];

  for (const num of numbers) {
    if (num < 0) {
      result.push(num);
    }
  }

  for (const num of numbers) {
    if (num >= 0) {
      result.push(num);
    }
  }

  console.log(result);
}

positiveNegativeNumbers([7, -2, 8, 9]);
positiveNegativeNumbers([3, -2, 0, -1]);
