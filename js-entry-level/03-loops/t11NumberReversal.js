function numberReversal(number) {
  let reversedNumber = 0;

  while (number > 0) {
    let lastDigit = number % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    number = Math.floor(number / 10);
  }

  console.log(reversedNumber);
}

numberReversal(123);
numberReversal(9876);
numberReversal(505);
numberReversal(10203);
numberReversal(7);
