//Understand the Problem:
//  input: three strings - loan amount, APR, and loan duration (months)
//  ouput: the monthly payment
//  need to use this formula for monthly payment
//    let m = p * (j / (1 - Math.pow((1 + j),(-n))));
//    where m is monthly payment, p is loan amount, j is monthly interest rate,
//    and n is loan duration in months
//Experiments / Test Cases:
//  mortgageCalculator(0, 0, 0); returns 0
//  any non positive, non-number type should request a different value.
//Data Structures:
//  strings > numbers > string
//Algorithm:
//  Get input from user for loan amount
//  validate that user input is valid type
//  Get input from user for APR
//  validate that user input is valid type
//  Get input from user for loan duration
//  validate that user input is valid type
//  convert APR to monthly interest rate : MPR = APR/12
//  convert MPR from % to decimal using: MPR/100
//  convert MPR, loan amount, and loan duration into monthly payment
//  return payment amount
//  Ask user if they would like to repeat
//  validate the answer was valid
//  repeat code if user inputs yes

let readline = require('readline-sync');
let message = require('./mortgage_calculator_messages.json');
console.clear();

//Functions used in main code
let validNumber = num => {
  return (Math.sign(num) !== -1 && typeof num === 'number' && num >= 0);
};

let validAnswer = ans => (ans === '1' || ans === '0');

let strToNum = str => {
  if (/,/.test(str)) {
    str = str.replace(/,/g, '');
  }
  return parseFloat(str);
};

let prompt = (key) => {
  console.log('=> ' + message[key]);
};

let payment = (mpr, amount, durationMonths) => {
  if (mpr !== 0 && durationMonths !== 0) {
    return amount * (mpr / (1 - Math.pow((1 + mpr),(-durationMonths))));
  } else if (mpr === 0 && durationMonths !== 0) {
    return amount / durationMonths;
  } else {
    return amount;
  }
};

let getInput = (inputType, inputErrorMessage) => {
  prompt(inputType);
  let num = strToNum(readline.question());
  while (!validNumber(num)) {
    prompt(inputErrorMessage);
    num = strToNum(readline.question());
  }
  return num;
};

//Begin calculator
prompt('initialize');

let answer;
do {

  //Get user input and validate
  let apr = getInput('apr', 'oopsApr');
  let mpr = apr / 12 / 100;
  console.clear();

  let loanAmt = getInput('loanAmt', 'oopsAmt');
  console.clear();

  let duration = getInput('loanDuration', 'oopsDuration');
  console.clear();

  //Execution Code
  let monthlyPayment = payment(mpr, loanAmt, duration);
  console.log(`Inputs: APR = ${apr}%, Loan Amount = $${loanAmt}, and Loan Duration = ${duration} month(s).\nYour monthly payment is $${monthlyPayment.toFixed(2)}`);

  //Ask user if they want to re-use calculator
  prompt('again');
  answer = readline.question();
  console.clear();
  while (!validAnswer(answer)) {
    prompt('oopsAns');
    answer = readline.question();
    console.clear();
  }

} while (strToNum(answer));