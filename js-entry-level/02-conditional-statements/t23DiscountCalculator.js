function discountCalculator(age, membership) {
  if (age < 18) {
    console.log("10% discount");
  } else if (age >= 18 && age <= 64) {
    if (membership === "Yes") {
      console.log("20% discount");
    } else {
      console.log("10% discount");
    }
  } else {
    console.log("30% discount");
  }
}

discountCalculator(20, "Yes");
discountCalculator(15, "No");
discountCalculator(70, "No");
