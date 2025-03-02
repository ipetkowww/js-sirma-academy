function newBuilding(floor, room) {
  let mark;
  for (let i = floor; i >= 1; i--) {
    for (let j = 0; j < room; j++) {
      if (i === floor) {
        mark = "L";
      } else if (i % 2 === 0) {
        mark = "O";
      } else {
        mark = "A";
      }
      process.stdout.write(`${mark}${i}${j} `);
    }
    console.log();
  }
}

newBuilding(6, 4);
console.log();
newBuilding(3, 3);
console.log();
newBuilding(4, 4);
