function movieTicketPrice(age) {
  if (age >= 0 && age <= 12) {
    console.log("$5");
  } else if (age >= 13 && age <= 19) {
    console.log("$8");
  } else if (age >= 20) {
    console.log("$10");
  } else {
    console.log("Invalid age");
  }
}

movieTicketPrice(10);
movieTicketPrice(16);
movieTicketPrice(25);
movieTicketPrice(13);
