function atSea(days, roomType, assessment) {
  let singleRoomPrice = 25.0;
  let apartmentPrice = 50.0;
  let presidentialPrice = 100.0;

  let nights = days - 1;

  let totalPrice = 0;
  let discount = 0;

  if (roomType === "single room") {
    totalPrice = nights * singleRoomPrice;
  } else if (roomType === "apartment") {
    totalPrice = nights * apartmentPrice;

    if (days < 10) {
      discount = 0.3;
    } else if (days <= 15) {
      discount = 0.35;
    } else {
      discount = 0.5;
    }
  } else if (roomType === "president apartment") {
    totalPrice = nights * presidentialPrice;

    if (days < 10) {
      discount = 0.1;
    } else if (days <= 15) {
      discount = 0.15;
    } else {
      discount = 0.2;
    }
  }

  totalPrice = totalPrice * (1 - discount);

  if (assessment === "positive") {
    totalPrice = totalPrice * 1.25;
  } else if (assessment === "negative") {
    totalPrice = totalPrice * 0.9;
  }

  console.log(totalPrice.toFixed(2));
}

atSea(11, "apartment", "positive");
atSea(30, "president apartment", "negative");
atSea(12, "single room", "positive");
atSea(2, "apartment", "positive");
