function potionBrewing(ingredient1, ingredient2) {
  if (ingredient1 === "herbs" || ingredient2 === "herbs") {
    if (ingredient1 === "water" || ingredient2 === "water") {
      console.log("Health potion");
    } else if (ingredient1 === "oil" || ingredient2 === "oil") {
      console.log("Stealth potion");
    } else {
      console.log("Minor stamina potion");
    }
  } else if (ingredient1 === "berries" || ingredient2 === "berries") {
    if (ingredient1 === "sugar" || ingredient2 === "sugar") {
      console.log("Speed potion");
    } else {
      console.log("Minor energy potion");
    }
  } else {
    console.log("No potion");
  }
}

potionBrewing("herbs", "water");
potionBrewing("herbs", "oil");
potionBrewing("herbs", "banana");
potionBrewing("berries", "sugar");
potionBrewing("berries", "banana");
potionBrewing("herbs", "sugar");
potionBrewing("sugar", "salt");
