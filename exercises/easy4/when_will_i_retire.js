//input:  Prompt user for age (string), and year that they would like to retire (string)
//output:  string including the current year and the year that they will retire, plus the 
//  time in between each
//data struct: strings
//alg:
//  prompt user for current age and retirement year
//  set currentYear equal to the current year
//  set retirement year equal to current year + (retirement age - current age)
//  output string
const readline = require("readline-sync");
const TODAY = new Date();
const YEAR = TODAY.getFullYear();


let age = readline.question('What is your age? ');
let retirementAge = readline.question('At what age would you like to retire? ');

let retirementYear = YEAR + (retirementAge - age);
let timeLeft = retirementYear - YEAR;

console.log(`It's ${YEAR}. You will retire in ${retirementYear}.\nYou have only ${timeLeft} years of work to go!`);