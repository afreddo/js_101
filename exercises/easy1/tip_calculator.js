//input: user input of bill amount and tip rate
//output: log both the tip and total amount of bill to console
//user will input valid numbers
//alg: get input tip and bill amounts from user
//calculate total tip by bill * tip/11
//calculate total bill by bill + tip
//log answers to console


let readline = require('readline-sync');

console.log('What is the bill? ');
let bill = readline.question();
bill = parseInt(bill);

console.log('What is the tip percentage? (ex: 10 for 10%)');
let tip = readline.question();
tip = parseInt(tip);

let tipTotal = bill * tip/100;
let billTotal = tipTotal + bill;

console.log(`The tip is $${tipTotal.toFixed(2)}\nThe total is $${billTotal.toFixed(2)}`);
