function firstAndLastKNumbers(numbers, k) {
  const firstK = numbers.slice(0, k).join(" ");
  const lastK = numbers.slice(numbers.length - k).join(" ");

  console.log(firstK + "\n" + lastK);
}

firstAndLastKNumbers([7, 8, 9], 2);
firstAndLastKNumbers([6, 7, 8, 9], 3);
