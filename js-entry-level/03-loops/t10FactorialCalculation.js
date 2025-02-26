function factorialCalculation(number) {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  console.log(factorial);
}

factorialCalculation(5);
factorialCalculation(3);
factorialCalculation(0);
factorialCalculation(1);
factorialCalculation(10);
