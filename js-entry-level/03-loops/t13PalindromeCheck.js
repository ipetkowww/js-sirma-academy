function palindromeCheck(text) {
  for (let i = 0; i < text.length; i++) {
    let fromBeginning = text[i];
    let fromEnd = text[text.length - 1 - i];

    if (fromBeginning !== fromEnd) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

palindromeCheck("radar");
palindromeCheck("hello");
palindromeCheck("racecar");
palindromeCheck("java");
palindromeCheck("madam");
