function hollowRectangle(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = "";

    for (let j = 0; j < cols; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

hollowRectangle(4, 6);
console.log("---------------------");
hollowRectangle(2, 2);
console.log("---------------------");
hollowRectangle(3, 4);
