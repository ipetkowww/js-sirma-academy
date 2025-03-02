function encoding(number) {
  const digitsCount = number.toString().length;

  for (let i = 0; i < digitsCount; i++) {
    let lastDigit = Math.floor(number % 10);
    if (lastDigit === 0) {
      process.stdout.write("ZERO");
    } else {
      let char = String.fromCodePoint(Math.floor(lastDigit + 33));
      for (let j = 0; j < lastDigit; j++) {
        process.stdout.write(char);
      }
    }
    console.log();
    number = Math.floor(number / 10);
  }
}

encoding(2049);
console.log("------------------");
encoding(9347439);
