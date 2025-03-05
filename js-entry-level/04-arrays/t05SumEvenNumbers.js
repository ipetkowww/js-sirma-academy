function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = Number(arr[i]);
    if (currentNumber % 2 === 0) {
      sum += currentNumber;
    }
  }
  console.log(sum);
}

sumOfEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumOfEvenNumbers(["3", "5", "7", "9"]);
sumOfEvenNumbers(["2", "4", "6", "8", "10"]);
