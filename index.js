const words = [
  "Uche",
  "Divine",
  "Daniel",
  "okezie",
  "David",
  "queen",
  "boyce",
  "Miracle",
  "iyke",
  "Mabel",
  "Chinedu",
];

let longestWords = [];
let longestWordLength = 0;

words.forEach((word, index) => {
  longestWordLength =
    word.length > longestWordLength ? word.length : longestWordLength;
});

words.forEach((value, index) => {
  if (value.length === longestWordLength) longestWords.push(value);
});

console.log(longestWords);
