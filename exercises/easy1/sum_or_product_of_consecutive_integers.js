//input: input from user of number > 0 and either sum or product choice
//output: either the sum or product of of all integers between 1 and the chosen number
//data: string needs to be converted to number
//alg:
//get input from user for computation type and number
//while iterator <= chosen number, num += iterator or num *= iterator
let readline = require('readline-sync');

let integer = parseInt(readline.question('Please enter an integer greater than 0: \n'));
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product: \n');

let value;
(operation === 's') ? value = 0 : value = 1;

for (let i = 1; i <= integer; i++) {
  (operation === 's') ? value += i : value *= i;
}

let operator;
(operation === 's') ? operator = 'sum' : operator = 'product'; 


console.log(`The ${operator} of the integers between 1 and ${integer} is ${value}`);