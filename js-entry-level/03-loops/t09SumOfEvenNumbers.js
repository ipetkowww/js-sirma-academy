function sumOfEvenNumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number * 2; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  console.log(sum);
}

sumOfEvenNumbers(3);
sumOfEvenNumbers(5);
sumOfEvenNumbers(1);
sumOfEvenNumbers(0);
sumOfEvenNumbers(10);
