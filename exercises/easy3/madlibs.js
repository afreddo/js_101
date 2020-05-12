//input: user prompted for noun, verb, adverb, and an adjective
//output: Prints the inputs placed into a string
//data struct: string
//alg:
//  prompt user for inputs
// output string with inputs included

const readline = require("readline-sync");

console.log('Enter a noun: ');
let noun = readline.question();

console.log('Enter a verb: ');
let verb = readline.question();

console.log('Enter an adjective: ');
let adjective = readline.question();

console.log('Enter an adverb: ');
let adverb = readline.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That\'s hilarious!`);