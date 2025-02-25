function adventureGamePath(rightHandTool, leftHandTool) {
  if (rightHandTool === "sword" || leftHandTool === "sword") {
    if (rightHandTool === "shield" || leftHandTool === "shield") {
      console.log("Path to the castle");
    } else {
      console.log("Path to the forest");
    }
  } else if (rightHandTool === "map" || leftHandTool === "map") {
    if (rightHandTool === "coins" || leftHandTool === "coins") {
      console.log("Go to the town");
    } else {
      console.log("Camp");
    }
  } else {
    console.log("Wander aimlessly");
  }
}

adventureGamePath("sword", "shield");
adventureGamePath("map", "coins");
adventureGamePath("torch", "flower");
adventureGamePath("sword", "pouch");
adventureGamePath("map", "compass");
