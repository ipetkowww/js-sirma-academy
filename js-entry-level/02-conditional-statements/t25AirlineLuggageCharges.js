function airlineLuggageCharges(weight, dimensions) {
  let totalFee = 0;
  let isOverweight = false;
  let isOversize = false;
  let oversizeFee = 0;

  if (weight > 50) {
    totalFee += 100;
    isOverweight = true;
  }

  if (dimensions > 158) {
    isOversize = true;
    let excessDimensions = dimensions - 158;

    if (excessDimensions >= 1 && excessDimensions <= 20) {
      oversizeFee = 50;
    } else if (excessDimensions >= 21 && excessDimensions <= 50) {
      oversizeFee = 100;
    } else {
      oversizeFee = 200;
    }

    totalFee += oversizeFee;
  }

  if (isOverweight && isOversize) {
    totalFee += 50;
  }

  if (isOverweight && isOversize) {
    console.log(`$${totalFee} (Overweight + Oversize + Handling)`);
  } else if (isOverweight) {
    console.log(`$${totalFee} (Overweight)`);
  } else if (isOversize) {
    if (oversizeFee === 50) {
      console.log(`$${totalFee} (Slightly oversize)`);
    } else {
      console.log(`$${totalFee} (Oversize)`);
    }
  } else {
    console.log("No extra charges");
  }
}

airlineLuggageCharges(52, 160);
airlineLuggageCharges(48, 180);
airlineLuggageCharges(55, 190);
