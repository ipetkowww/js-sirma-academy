function reverseArrayOfStrings(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const currentElement = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = currentElement;
  }

  console.log(arr.join(" "));
}

reverseArrayOfStrings(["a", "b", "c", "d", "e"]);
reverseArrayOfStrings(["abc", "def", "hig", "klm", "nop"]);
reverseArrayOfStrings(["33", "123", "0", "dd"]);
