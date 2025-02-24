function numberToWords(num) {
  if (num < 0 || num > 9) {
    console.log("too big");
    return;
  }

  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  console.log(words[num]);
}

numberToWords(7);
numberToWords(5);
numberToWords(10);
