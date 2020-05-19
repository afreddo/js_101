// input: six numbers from user
// output: string stating whether the sixth number appears in the first 5
// data struct: strings
// alg:
//  prompt user for six numbers and assign them to an array
//  if first 5 array spots has sixth number then return first string
//  else return second string
const readline = require("readline-sync");

let array = [];
for (let i = 0; i < 6; i++) {
  array.push(readline.question(`Input the ${i+1} number: `));
}

if (array.slice(0,5).includes(array[5])) {
  console.log(`The number ${array[5]} appears in ${array.slice(0,5)}`);
} else {
  console.log(`The number ${array[5]} does not appear in ${array.slice(0,5)}`);
}

