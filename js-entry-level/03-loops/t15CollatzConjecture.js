function collatzConjecture(number) {
  while (number !== 1) {
    process.stdout.write(`${number} `);

    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = number * 3 + 1;
    }
  }
  process.stdout.write("1");
  console.log();
}

collatzConjecture(6);
collatzConjecture(12);
collatzConjecture(9);
collatzConjecture(200);
collatzConjecture(15);
