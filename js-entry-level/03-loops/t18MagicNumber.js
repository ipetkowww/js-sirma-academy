function magicNumber(startInterval, endInterval, magicNumber) {
  let counter = 0;

  for (let i = startInterval; i <= endInterval; i++) {
    for (let j = startInterval; j <= endInterval; j++) {
      counter++;
      if (i + j === magicNumber) {
        console.log(`Combination ${counter} - (${i} + ${j} = ${i + j})`);
        return;
      }
    }
  }

  console.log(`${counter} combinations - neither equals ${magicNumber}`);
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);
