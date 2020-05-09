//input: prompts user for two strings representing numbers
//output: returns the following operations for the two inputs addition, sub, product,
// quotient, remainder, and power
//dont need to validate
//data struct: numbers
//alg
//  prompt user for two inputs
// convert strings to numbers
// perform +, -, *, /, % and ** on the two numbers
// return results

let readline = require('readline-sync');

let num1 = parseInt(readline.question('Select the first positive integer: '));
let num2 = parseInt(readline.question('Select the second positive integer: '));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
