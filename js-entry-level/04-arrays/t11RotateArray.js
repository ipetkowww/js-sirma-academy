function rotateArray(arr, rotations) {
  const effectiveRotations = rotations % arr.length;

  for (let i = 0; i < effectiveRotations; i++) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
