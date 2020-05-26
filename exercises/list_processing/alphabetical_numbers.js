//input:  array of integers between 0 and 19
//output: return array of those integers based on english word for each number
//data struct: objects/arrays
//alg:
//  create object relating words to numbers
//  sort the keys (words)
//  transform keys to values in new array

let words = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19
};

let alphabeticNumberSort = array => Object.keys(words).sort().map(ele => words[ele]);

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
