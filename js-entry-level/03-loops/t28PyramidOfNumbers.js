function pyramidOfNumbers(n) {
  let currentNum = 1;
  let row = 1;

  while (currentNum <= n) {
    let rowStr = "";

    for (let i = 0; i < row && currentNum <= n; i++) {
      rowStr += currentNum + " ";
      currentNum++;
    }

    console.log(rowStr.trim());
    row++;
  }
}

console.log("----------------");
pyramidOfNumbers(7);
console.log("----------------");
pyramidOfNumbers(10);
console.log("----------------");
pyramidOfNumbers(15);
