// input: string from user.
// output: output a string to user either normally or in all caps
// if the user puts name! then the response must be in all caps
//data: string
//test: if data is '' then it should not print anything
//alg:
//get name from user
//test if last index of name === ! if so print in all caps, if not print normally

let readline = require('readline-sync');

let name = readline.question('What is your name? ');

(name[name.length-1] !== '!') ? console.log(`Hello ${name}.`) : console.log(`HELLO ${name.toUpperCase().slice(0,-1)}. WHY ARE WE SCREAMING?`);
