function simpleCalculator(num1, num2, operation) {
  let result;

  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    result = num1 / num2;
  }

  if (Number.isInteger(result)) {
    console.log(result);
  } else {
    console.log(result.toFixed(2));
  }
}

simpleCalculator(5, 5, "add");
simpleCalculator(10, 12, "subtract");
simpleCalculator(9, 3, "divide");
simpleCalculator(5, 2, "divide");
simpleCalculator(3.1, 0.1, "multiply");
