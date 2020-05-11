const readline = require('readline-sync');
const messages = require('./rpsls_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p',
  's', 'l', 'sp'];
const VALID_ANSWER = ['yes','no','y','n'];
const MAX_WINS = 5;

//Functions used in main code
let prompt = key => {
  console.log(`==> ${messages[key]}`);
};

let convertInput = choice => {
  switch (choice) {
    case 'r': return 'rock';
    case 'p': return 'paper';
    case 's': return 'scissors';
    case 'l': return 'lizard';
    case 'sp': return 'spock';
    case 'y': return 'yes';
    case 'n': return 'no';
    default: return choice;
  }
};

let isValidInput = choice => VALID_CHOICES.includes(choice);

let isValidAnswer = answer => VALID_ANSWER.includes(answer);

let chooseAgain = choice => {
  while (!isValidInput(choice)) {
    console.clear();
    prompt('oopsChoice');
    choice = readline.question().toLowerCase();
  }
  return choice;
};

let chooseAgainAnswer = choice => {
  while (!isValidAnswer(choice)) {
    console.clear();
    prompt('oopsAnswer');
    choice = readline.question().toLowerCase();
  }
  return choice;
};

let updateScore = (winner, score) => {
  if (winner === 'player') {
    score[0] += 1;
  }
  if (winner === 'computer') {
    score[1] += 1;
  }
};

let returnWinner = (choicePlayer, choiceComputer) => {
  if (messages[choicePlayer]["win"].includes(choiceComputer)) {
    return 'player';
  } else if (messages[choicePlayer]["lose"].includes(choiceComputer)) {
    return 'computer';
  } else {
    return 'tie';
  }
};

let getChoice = () => {
  prompt('selection');
  let option = chooseAgain(readline.question().toLowerCase());
  return convertInput(option);
};

let getChoiceComputer = () => {
  let numericChoice = Math.ceil(Math.random() * 5);
  return messages[String(numericChoice)];
};

let displayGameOver = scores => {
  if (scores[0] === MAX_WINS) {
    prompt("winner");
  }
  if (scores[1] === MAX_WINS) {
    prompt("loser");
  }
};

let playAgain = () => {
  prompt("again");
  let answer = chooseAgainAnswer(readline.question().toLowerCase());
  console.clear();
  return convertInput(answer);
};

let displayRoundStats = (winner, score, choicePlayer, choiceComputer) => {
  if (winner === 'player') {
    prompt('round win');
  } else if (winner === 'computer') {
    prompt('round loss');
  } else {
    prompt('round tie');
  }
  console.log(`You chose ${choicePlayer}\nThe Computer chose ${choiceComputer}`);
  console.log(`Current score is Player: ${score[0]}, Computer: ${score[1]}`);
};

let resetScore = score => {
  score[0] = 0;
  score[1] = 0;
};

//Main code
console.clear();
prompt('greeting');

let score = [0, 0]; // score[0] is player, score [1] is computer
while (true) {

  let choicePlayer = getChoice();
  let choiceComputer = getChoiceComputer();
  console.clear();

  let winner = returnWinner(choicePlayer, choiceComputer);
  updateScore(winner, score);
  displayRoundStats(winner, score, choicePlayer, choiceComputer);

  displayGameOver(score);
  if (score.includes(MAX_WINS)) {
    let answer = playAgain(score);
    resetScore(score);
    if (answer === 'no') break;
  }
}