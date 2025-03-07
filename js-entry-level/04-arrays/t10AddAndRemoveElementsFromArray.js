function addAndRemoveElements(commands) {
  let number = 1;
  const result = [];

  for (const command of commands) {
    if (command === "add") {
      result.push(number);
    } else if (command === "remove" && result.length > 0) {
      result.pop();
    }
    number++;
  }

  console.log(result.length > 0 ? result.join(" ") : "Empty");
}

addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
