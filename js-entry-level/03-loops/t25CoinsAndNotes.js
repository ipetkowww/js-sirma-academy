function coinsAndNotes(coins1lv, coins2lv, banknotes5lv, sum) {
  for (let i = 0; i <= coins1lv; i++) {
    for (let j = 0; j <= coins2lv; j++) {
      for (let k = 0; k <= banknotes5lv; k++) {
        let result = i * 1 + j * 2 + k * 5;
        if (result === sum) {
          console.log(
            `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${result} lv.`
          );
        }
      }
    }
  }
}

coinsAndNotes(3, 2, 3, 10);
console.log("-------------");
coinsAndNotes(5, 3, 1, 7);
