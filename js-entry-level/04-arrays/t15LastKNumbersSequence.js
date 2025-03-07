function lastKNumbersSequence(n, k) {
  const sequence = [1];

  for (let i = 1; i < n; i++) {
    const start = Math.max(0, i - k);
    let sum = 0;
    for (let j = start; j < i; j++) {
      sum += sequence[j];
    }
    sequence.push(sum);
  }

  console.log(sequence.join(" "));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
