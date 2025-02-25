function makeupShop(
  renovationPrice,
  powders,
  lipsticks,
  spirals,
  shadows,
  concealers
) {
  let powderPrice = 2.6;
  let lipstickPrice = 3.0;
  let spiralPrice = 4.1;
  let shadowPrice = 8.2;
  let concealerPrice = 2.0;

  let totalProducts = powders + lipsticks + spirals + shadows + concealers;

  let totalAmount =
    powders * powderPrice +
    lipsticks * lipstickPrice +
    spirals * spiralPrice +
    shadows * shadowPrice +
    concealers * concealerPrice;

  if (totalProducts >= 50) {
    totalAmount = totalAmount * 0.75;
  }

  let rent = totalAmount * 0.1;
  let profit = totalAmount - rent;

  if (profit >= renovationPrice) {
    let remaining = profit - renovationPrice;
    console.log(`Yes! ${remaining.toFixed(2)} BGN left.`);
  } else {
    let needed = renovationPrice - profit;
    console.log(`Not enough money! ${needed.toFixed(2)} BGN needed.`);
  }
}

makeupShop(40.8, 20, 25, 30, 50, 10);
makeupShop(320, 8, 2, 5, 5, 1);
