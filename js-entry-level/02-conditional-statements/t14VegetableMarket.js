function vegetableMarket(vegetable, day, quantity) {
  let price = 0;
  let isValidVegetable = true;
  let isValidDay = true;

  if (
    vegetable !== "tomato" &&
    vegetable !== "onion" &&
    vegetable !== "lettuce" &&
    vegetable !== "cucumber" &&
    vegetable !== "pepper"
  ) {
    isValidVegetable = false;
  }

  if (
    day !== "Monday" &&
    day !== "Tuesday" &&
    day !== "Wednesday" &&
    day !== "Thursday" &&
    day !== "Friday" &&
    day !== "Saturday" &&
    day !== "Sunday"
  ) {
    isValidDay = false;
  }

  if (!isValidVegetable || !isValidDay) {
    console.log("error");
    return;
  }

  let isWeekend = day === "Saturday" || day === "Sunday";

  if (vegetable === "tomato") {
    if (isWeekend) {
      price = 2.8;
    } else {
      price = 2.5;
    }
  } else if (vegetable === "onion") {
    if (isWeekend) {
      price = 1.3;
    } else {
      price = 1.2;
    }
  } else if (vegetable === "lettuce") {
    price = 0.85;
  } else if (vegetable === "cucumber") {
    if (isWeekend) {
      price = 1.75;
    } else {
      price = 1.45;
    }
  } else if (vegetable === "pepper") {
    if (isWeekend) {
      price = 3.5;
    } else {
      price = 5.5;
    }
  }

  let total = price * quantity;
  console.log(total.toFixed(2));
}

vegetableMarket("tomato", "Tuesday", 2);
vegetableMarket("onion", "Sunday", 3);
vegetableMarket("pepper", "Monday", 10);
vegetableMarket("banana", "Friday", 5);
