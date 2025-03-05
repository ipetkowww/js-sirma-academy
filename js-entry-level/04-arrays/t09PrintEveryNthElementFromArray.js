function printEveryNthElement(array, n) {
  if (n > array.length - 1) {
    console.log(array[0]);
    return;
  }
  for (let i = 0; i < array.length; i += n) {
    process.stdout.write(String(array[i]) + " ");
  }
  console.log();
}

printEveryNthElement(["dsa", "asd", "demo", "test"], 2);
printEveryNthElement([1, 2, 3, 4, 5, 6], 6);
