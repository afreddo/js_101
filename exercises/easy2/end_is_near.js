//input:  string of at least two words. Words are any sequence of non-blank chars
//output:  return second to last word
//data struct: array
//alg:
//  break string into array of words
//  return second to last index

let penultimate = sentence => sentence.split(' ')[sentence.split(' ').length-2];

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true