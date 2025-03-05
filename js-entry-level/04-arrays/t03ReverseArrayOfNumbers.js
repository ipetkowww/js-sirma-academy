function reverseArrayOfNumbers(number, arr) {
  let newArr = [];

  for (let i = number - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  console.log(newArr.join(" "));
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);
