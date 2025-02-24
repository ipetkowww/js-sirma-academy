function addressByAge(age, gender) {
  if (gender === "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  } else if (gender === "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  }
}

addressByAge(14, "f");
addressByAge(17, "m");
addressByAge(10, "m");
addressByAge(32, "f");
