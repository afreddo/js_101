//input:  string argument
//output: returns string with words reversed
//data struct: arrays
//alg:
//  split string into array of words
//  reverse array
//  join array into string of words
//  return string

let reverseSentence = string => string.split(' ').reverse().join(' ');

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
