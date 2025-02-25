function daysInMonth(month) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    console.log(31);
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(30);
  } else if (month === 2) {
    console.log(28);
  } else {
    console.log("Invalid month");
  }
}

daysInMonth(1);
daysInMonth(2);
daysInMonth(4);
daysInMonth(7);
