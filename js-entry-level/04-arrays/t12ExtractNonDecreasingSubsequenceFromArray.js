function extractNonDecreasingSubsequence(numbers) {
  if (numbers.length === 0) {
    console.log("");
    return;
  }

  const result = [numbers[0]];
  let currentBiggest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] >= currentBiggest) {
      result.push(numbers[i]);
      currentBiggest = numbers[i];
    }
  }

  console.log(result.join(" "));
}

extractNonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractNonDecreasingSubsequence([1, 2, 3, 4]);
extractNonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);
