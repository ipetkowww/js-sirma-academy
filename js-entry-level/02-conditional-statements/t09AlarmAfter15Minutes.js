function alarmAfter15Minutes(hours, minutes) {
  minutes += 15;

  if (minutes >= 60) {
    hours++;
    if (hours >= 24) {
      hours = 0;
    }
    minutes -= 60;
  }

  console.log(`${hours}:${minutes.toString().padStart(2, "0")}`);
}

alarmAfter15Minutes(1, 47);
alarmAfter15Minutes(0, 2);
alarmAfter15Minutes(23, 59);
alarmAfter15Minutes(11, 7);
alarmAfter15Minutes(12, 48);
