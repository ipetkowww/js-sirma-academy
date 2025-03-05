function equalArrays(firstArr, secondArr) {
  let areEqual = true;
  let sum = 0;
  let index = 0;

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      index = i;
      areEqual = false;
      break;
    }
    sum += firstArr[i];
  }

  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}

equalArrays([10, 20, 30], [10, 20, 30]);
equalArrays([1, 2, 3, 4, 5], [1, 2, 4, 5]);
equalArrays([1], [10]);
