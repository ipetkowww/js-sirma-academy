function armstrongNumberCheck(number) {
  let digitsCount = number.toString().length;
  let result = 0;
  let inputNumber = number;

  while (number > 0) {
    let lastDigit = number % 10;
    result += Math.pow(lastDigit, digitsCount);
    number = Math.floor(number / 10);
  }

  if (result === inputNumber) {
    console.log(true);
  } else {
    console.log(false);
  }
}

armstrongNumberCheck(153);
armstrongNumberCheck(370);
armstrongNumberCheck(123);
armstrongNumberCheck(407);
armstrongNumberCheck(1634);
