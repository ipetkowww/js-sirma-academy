function condenseArray(array) {
  while (array.length > 1) {
    let condensed = [];

    for (let i = 0; i < array.length - 1; i++) {
      condensed.push(array[i] + array[i + 1]);
    }
    array = condensed;
  }
  return array[0];
}

console.log(condenseArray([2, 10, 3]));
console.log(condenseArray([5, 0, 4, 1, 2]));
console.log(condenseArray([1]));
