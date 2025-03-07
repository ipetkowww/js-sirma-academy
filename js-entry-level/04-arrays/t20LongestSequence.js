function longestSequence(numbers) {
  if (numbers.length === 0) {
    console.log("");
    return;
  }
  if (numbers.length === 1) {
    console.log(numbers[0].toString());
    return;
  }

  let longestSequence = [];
  let maxLength = 0;
  let startIndex = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currentLength = 1;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        currentLength++;
      } else {
        break;
      }
    }

    if (
      currentLength > maxLength ||
      (currentLength === maxLength && i > startIndex)
    ) {
      maxLength = currentLength;
      startIndex = i;
    }
    i += currentLength - 1;
  }

  for (let i = 0; i < maxLength; i++) {
    longestSequence.push(numbers[startIndex]);
  }

  console.log(longestSequence.join(" "));
}

longestSequence([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
longestSequence([1, 1, 1, 2, 3, 1, 3, 3]);
longestSequence([4, 4, 4, 4]);
longestSequence([0, 1, 1, 5, 2, 2, 6, 3, 3, 3]);
longestSequence([2, 2, 2, 1, 1, 1, 1]);
