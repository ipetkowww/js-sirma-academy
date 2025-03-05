function dayOfWeek(number) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (number < 1 || number > 7) {
    console.log("Invalid day!");
  } else {
    console.log(days[number - 1]);
  }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(11);
