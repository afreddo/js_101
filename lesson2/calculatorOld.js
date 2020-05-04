const readline = require('readline-sync');
const messages = require('./calculator_messages.json')

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidResponse(ans) {
  return ans !== '0' && ans !== '1';
}

prompt('Welcome to Calculator!');

let again = true;

while (Number(again)) {

  prompt('What\'s the first number?');
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt('Hmm... that doesn\'t look like a valid number.');
    number1 = readline.question();
  }
  
  prompt('What\'s the second number?');
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt('Hmm... that doesn\'t look like a valid number.');
    number2 = readline.question();
  }


  prompt('What operation would you like to perform?\n1) Add 2) Subtract '
  + '3) Multiply 4) Divide');
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt('Would you like to perform another calculation? Please select 1 for'
  + ' yes or 0 for No');
  again = readline.question();

  while (invalidResponse(again)) {
    prompt('Hmm... that doesn\'t look like a answer.\n Please select 1 for'
  + ' yes or 0 for No');
    again = readline.question();
  }
}