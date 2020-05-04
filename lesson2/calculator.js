const readline = require('readline-sync');
const messages = require('./calculator_messages.json');


// These functions handle subproccess called during operations
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidResponse(ans) {
  return ans !== '0' && ans !== '1';
}

let langChoice;

function languageSelector(lang) {
  if (lang === 'es' || lang === 'spanish') {
    return 'es';
  } else {
    return 'en';
  }
}

// These prompts help select the users chosen language
prompt(messages.language);
let langChoiceInitial = readline.question();
langChoice = languageSelector(langChoiceInitial);

prompt(messages[langChoice].selection);
prompt(messages[langChoice].greeting);


//The following while loop runs while the user still wants to use the calculator
let again = true;

while (Number(again)) {

  //These prompts get valid input from the user for numbers 1 and 2
  prompt(messages[langChoice].whatNum.first);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(messages[langChoice].invalidNum);
    number1 = readline.question();
  }
  prompt(messages[langChoice].whatNum.second);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(messages[langChoice].invalidNum);
    number2 = readline.question();
  }
  console.clear();
  //This prompts the user for the chosen operation where 1: addition, 
  //2: subtraction, 3: multiplication, and 4: division
  prompt(messages[langChoice].operation);
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages[langChoice].invalidOp);
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
  prompt(`${messages[langChoice].output}${output}`);
  
  //Asks user if they would like to use the calculator again
  prompt(messages[langChoice].another);
  again = readline.question();

  while (invalidResponse(again)) {
    prompt(messages[langChoice].invalidAgain);
    again = readline.question();
  }
  
  console.clear();
}