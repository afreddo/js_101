//Understand the Problem:
//  input: three strings - loan amount, APR, and loan duration (months)
//  ouput: the monthly payment
//  need to use this formula for monthly payment
//    let m = p * (j / (1 - Math.pow((1 + j),(-n))));
//    where m is monthly payment, p is loan amount, j is monthly interest rate,
//    and n is loan duration in months
//Experiments / Test Cases:
//  mortgageCalculator(0, 0, 0); returns 0
//Data Structures:
//  strings > numbers > strings
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
let readline = require('readline-sync');
let message = require('./mortgage_calculator_messages.json');
console.clear();

//Functions used in main code
let validNumber = num => {
  return (Math.sign(num) !== -1 && typeof num === 'number' && num >= 0);
};
let validDuration = num => {
  return (Math.sign(num) === 1 && typeof num === 'number');
};

let validAnswer = ans => (ans === '1' || ans === '0');

let prompt = (key) => {
  console.log('=> ' + message[key]);
};

let payment = (mpr, amount, durationMonths) => {
  if (mpr !== 0) {
    return amount * (mpr / (1 - Math.pow((1 + mpr),(-durationMonths))));
  } else {
    return amount / durationMonths;
  }
};

//Begin calculator
prompt('initialize');

let answer;
do {

  //Get user input and validate
  prompt('apr');
  let apr = parseFloat(readline.question());
  while (!validNumber(apr)) {
    prompt('oopsApr');
    apr = parseFloat(readline.question());
  }
  let mpr = apr / 12 / 100;
  console.clear();

  prompt('loanAmt');
  let loanAmt = parseFloat(readline.question());
  while (!validNumber(loanAmt)) {
    prompt('oopsAmt');
    loanAmt = parseFloat(readline.question());
  }
  console.clear();

  prompt('loanDuration');
  let duration = parseFloat(readline.question());
  while (!validDuration(duration)) {
    prompt('oopsDuration');
    duration = parseFloat(readline.question());
  }
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

} while (parseInt(answer,10));