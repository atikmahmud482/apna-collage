function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  //   console.log(count);

  return count;
}

// countVowels("atik-al-mahmud");

// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks = [97, 91, 95, 56, 34, 56, 76];

let toppers = marks.filter((val) => {
  return val > 90;
});
// console.log(toppers);
