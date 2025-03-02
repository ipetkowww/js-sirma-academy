function fibonacciSequenceSum(n) {
  if (n <= 0) {
    console.log(0);
    return;
  }
  if (n === 1) {
    console.log(1);
    return;
  }

  let fib1 = 1;
  let fib2 = 1;
  let sum = fib1;

  for (let i = 2; i <= n; i++) {
    sum += fib2;
    let nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib;
  }

  console.log(sum);
}

fibonacciSequenceSum(3);
fibonacciSequenceSum(5);
fibonacciSequenceSum(1);
fibonacciSequenceSum(0);
fibonacciSequenceSum(10);
