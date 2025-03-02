function squareOfAsterisks(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}

squareOfAsterisks(2);
console.log("---------------------");
squareOfAsterisks(3);
