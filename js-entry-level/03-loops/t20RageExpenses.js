function rageExpenses(
  lostGames,
  headsetPrice,
  mousePrice,
  keyboardPrice,
  displayPrice
) {
  let headsetTrash = 0;
  let mouseTrash = 0;
  let keyboardTrash = 0;
  let displayTrash = 0;

  for (let i = 1; i <= lostGames; i++) {
    if (i % 2 === 0) {
      headsetTrash++;
    }
    if (i % 3 === 0) {
      mouseTrash++;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      keyboardTrash++;
      if (keyboardTrash % 2 === 0) {
        displayTrash++;
      }
    }
  }

  const total = (
    headsetPrice * headsetTrash +
    mousePrice * mouseTrash +
    keyboardPrice * keyboardTrash +
    displayPrice * displayTrash
  ).toFixed(2);

  console.log(`Rage expenses: ${total} lv.`);
}

rageExpenses(7, 2, 3, 4, 5);
rageExpenses(23, 12.5, 21.5, 40, 200);
