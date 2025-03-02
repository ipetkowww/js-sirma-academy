function change(amount) {
  let amountInStotinki = Math.round(amount * 100);

  let coinCount = 0;

  let coinsUsed = Math.floor(amountInStotinki / 200);
  coinCount += coinsUsed;
  amountInStotinki -= coinsUsed * 200;

  coinsUsed = Math.floor(amountInStotinki / 100);
  coinCount += coinsUsed;
  amountInStotinki -= coinsUsed * 100;

  coinsUsed = Math.floor(amountInStotinki / 50);
  coinCount += coinsUsed;
  amountInStotinki -= coinsUsed * 50;

  coinsUsed = Math.floor(amountInStotinki / 20);
  coinCount += coinsUsed;
  amountInStotinki -= coinsUsed * 20;

  coinsUsed = Math.floor(amountInStotinki / 10);
  coinCount += coinsUsed;
  amountInStotinki -= coinsUsed * 10;

  coinsUsed = Math.floor(amountInStotinki / 5);
  coinCount += coinsUsed;
  amountInStotinki -= coinsUsed * 5;

  coinsUsed = Math.floor(amountInStotinki / 2);
  coinCount += coinsUsed;
  amountInStotinki -= coinsUsed * 2;

  coinCount += amountInStotinki;

  console.log(coinCount);
}

change(1.23);
change(2);
change(0.56);
change(2.73);
