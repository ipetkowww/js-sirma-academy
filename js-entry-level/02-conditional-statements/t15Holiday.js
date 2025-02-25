function holiday(budget, season) {
  let destination;
  let accommodationType;
  let spentAmount;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      accommodationType = "Camp";
      spentAmount = budget * 0.3;
    } else {
      accommodationType = "Hotel";
      spentAmount = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Europe";
    if (season === "summer") {
      accommodationType = "Camp";
      spentAmount = budget * 0.4;
    } else {
      accommodationType = "Hotel";
      spentAmount = budget * 0.8;
    }
  } else {
    destination = "Asia";
    accommodationType = "Hotel";
    spentAmount = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${accommodationType} - ${spentAmount.toFixed(2)}`);
}

holiday(50, "summer");
holiday(75, "winter");
holiday(312, "summer");
holiday(678.53, "winter");
holiday(1500, "summer");
