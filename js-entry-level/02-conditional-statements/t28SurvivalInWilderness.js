function survivalInWilderness(timeOfDay, environment, item) {
  if (timeOfDay === "day") {
    if (environment === "forest") {
      if (item === "knife") {
        console.log("Hunt for food");
      } else if (item === "container") {
        console.log("Collect berries");
      } else {
        console.log("Explore");
      }
    } else if (environment === "desert") {
      if (item === "hat") {
        console.log("Search for water");
      } else {
        console.log("Find shade");
      }
    }
  } else if (timeOfDay === "night") {
    if (environment === "forest") {
      if (item === "firestarter") {
        console.log("Make a campfire");
      } else {
        console.log("Climb on a tree");
      }
    } else if (environment === "desert") {
      if (item === "blanket") {
        console.log("Sleep");
      } else {
        console.log("Keep moving to stay warm");
      }
    }
  }
}

survivalInWilderness("day", "forest", "knife");
survivalInWilderness("day", "forest", "container");
survivalInWilderness("night", "forest", "firestarter");
survivalInWilderness("day", "forest", "bag");
survivalInWilderness("night", "desert", "blanket");
survivalInWilderness("day", "desert", "hat");
survivalInWilderness("night", "desert", "sword");
survivalInWilderness("night", "forest", "hat");
