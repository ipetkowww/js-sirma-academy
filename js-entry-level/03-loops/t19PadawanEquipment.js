function padawanEquipment(
  money,
  students,
  lightsaberPrice,
  robePrice,
  beltPrice
) {
  const lightsabersNeeded = Math.ceil(students * 1.1);
  const freeBelts = Math.floor(students / 6);
  const beltsNeeded = students - freeBelts;

  const totalCost =
    lightsabersNeeded * lightsaberPrice +
    students * robePrice +
    beltsNeeded * beltPrice;

  const formattedCost = totalCost.toFixed(2);

  if (money >= totalCost) {
    console.log(`The money is enough - it would cost ${formattedCost}lv.`);
  } else {
    const neededMoney = (totalCost - money).toFixed(2);
    console.log(`George Lucas will need ${neededMoney}lv more.`);
  }
}

padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);
