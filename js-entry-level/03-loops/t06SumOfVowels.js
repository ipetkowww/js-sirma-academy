function sumOfVowels(text) {
  const aPoints = 1;
  const ePoints = 2;
  const iPoints = 3;
  const oPoints = 4;
  const uPoints = 5;

  let sum = 0;

  for (let i = 0; i <= text.length; i++) {
    const currentChar = text[i];
    switch (currentChar) {
      case "a":
        sum += aPoints;
        break;
      case "e":
        sum += ePoints;
        break;
      case "i":
        sum += iPoints;
        break;
      case "o":
        sum += oPoints;
        break;
      case "u":
        sum += uPoints;
        break;
    }
  }
  console.log(sum);
}

sumOfVowels("hello");
sumOfVowels("hi");
sumOfVowels("bye");
sumOfVowels("zzzz");
