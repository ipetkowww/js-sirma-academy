function arrayManipulations(commands) {
  let array = commands[0].split(" ");

  for (let i = 1; i < commands.length; i++) {
    const [command, ...args] = commands[i].split(" ");

    switch (command) {
      case "Add":
        array.push(args[0]);
        break;
      case "Remove":
        array = array.filter((item) => item !== args[0]);
        break;
      case "RemoveAt":
        array.splice(parseInt(args[0]), 1);
        break;
      case "Insert":
        array.splice(parseInt(args[1]), 0, args[0]);
        break;
    }
  }

  console.log(array.join(" "));
}

console.log(
  arrayManipulations([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
  ])
);
