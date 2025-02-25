function climateZoneIdentifier(latitude, hemisphere) {
  if (latitude === 0) {
    console.log("Equator");
  } else {
    let absLatitude = Math.abs(latitude);

    if (absLatitude > 66.5) {
      console.log("Arctic Zone");
    } else if (absLatitude > 23.5 && absLatitude <= 66.5) {
      console.log("Temperate Zone");
    } else if (absLatitude > 0 && absLatitude <= 23.5) {
      console.log("Tropic Zone");
    }
  }
}

climateZoneIdentifier(70, "N");
climateZoneIdentifier(45, "S");
climateZoneIdentifier(10, "N");
climateZoneIdentifier(0, "N");
climateZoneIdentifier(-85, "S");
