////////////////////////////////////////////////
// Dependencies, constants, and initial variables
////////////////////////////////////////////////
const readline = require('readline-sync');
const VALID_CHOICES_USER = ['rock (r)', 'paper (p)', 'scissors (sc)', 'spock (sp)', 'lizard (l)'];
const VALID_CHOICES_COMPUTER = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const POSSIBLE_USER_INPUT = ['rock', 'paper', 'scissors', 'spock', 'lizard', 'r', 'p', 'sc', 'sp', 'l'];

const USER_INPUT_TO_VALID_FORM = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
  lizard: 'lizard',
  spock: 'spock',
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  sp: 'spock',
  l: 'lizard',
};

const RULES = [
  'Scissors cut paper',
  'Paper covers rock',
  'Rock crushes lizard',
  'Lizard poisons Spock',
  'Spock smashes (or melts) scissors',
  'Scissors decapitate lizard',
  'Lizard eats paper',
  'Paper disproves Spock',
  'Spock vaporizes rock',
  'Rock breaks scissors',
];

const WINNING_SCORE = 3;
const RESULTS = ['ownWin', 'computerWin', 'tie'];
const PLAYER_WIN_INDEX = 0; 
const COMPUTER_WIN_INDEX = 1;
const TIE_INDEX = 2; 
let ownScore = 0;
let computerScore = 0;
let roundWinner;
let again;

////////////////
// Main function
////////////////
function playRPSEnhanced() {
  welcomeMsg();
  while (true) {

    let ownChoice = ownRoundChoice();
    let computerChoice = computerRoundChoice();

    roundWinner = winner(ownChoice, computerChoice);
    updateScore(roundWinner);
    displayRoundWinner(roundWinner);

    if (ownScore === WINNING_SCORE || computerScore === WINNING_SCORE) break;

    keepGoing(); 
  }

  displayOverallWinner();
  again = playAgain();
  if (!again) {
    exitGameMsg(); 
  } else {
    resetTally();
    playRPSEnhanced();
  }
}

////////////////
// Helper functions
////////////////
function prompt(message) {
  console.log(`=> ${message}`);
}

function winner(choice, computerChoice) {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}.`);
  if (playerWins(choice, computerChoice)) {
    return RESULTS[PLAYER_WIN_INDEX];
  } else if (choice === computerChoice) {
    return RESULTS[COMPUTER_WIN_INDEX];
  } else {
    return RESULTS[TIE_INDEX];
  }
}

function updateScore(roundWinner) {
  switch (roundWinner) {
    case RESULTS[PLAYER_WIN_INDEX]:
      ownScore += 1;
      break;
    case RESULTS[COMPUTER_WIN_INDEX]:
      computerScore += 1;
      break;
  }
}

function displayRoundWinner(roundWinner) {
  switch (roundWinner) {
    case RESULTS[PLAYER_WIN_INDEX]:
      prompt("You won this round.");
      break;
    case RESULTS[COMPUTER_WIN_INDEX]:
      prompt("The Computer won this round.");
      break;
    case RESULTS[TIE_INDEX]:
      prompt("It's a tie!");
      break;
  }

  console.log(`         Your score: ${ownScore}\n     Computer score: ${computerScore}`);
}

function playAgain() {
  prompt("Would you like to play again? (y/n)"); // Ask to continue. If response is no, break.
  let response = readline.question().toLowerCase();
  while (response !== 'n' && response !== 'y' && response !== 'no' && response !== 'yes') {
    prompt('Please enter "y" or "n".');
    response = readline.question().toLowerCase();
  }

  if (response === 'y' || response === 'yes') {
    return true;
  }
  return false;
}

function displayOverallWinner() {
  if (ownScore === WINNING_SCORE) {
    prompt(`You won the best of five! Good job!`);
  } else if (computerScore === WINNING_SCORE) {
    prompt(`The computer won the best of five!`);
  }
}
function welcomeMsg() {
  console.clear();

  prompt(`Welcome to Rock Paper Scissors Lizard Spock!`);
  prompt(`Play against the computer and try win in a best of five game.`);
  prompt(`You might be wondering which gesture beats what. Here are the possibilities:\n`);
  RULES.forEach(rule => console.log(`     ${rule}`));

  console.log();
  prompt(`Let's get started.`);
}

function ownRoundChoice() {
  prompt(`Choose one: ${VALID_CHOICES_USER.join(', ')}`);
  let userInput = readline.question().toLowerCase();
  while (!POSSIBLE_USER_INPUT.includes(userInput)) {
    prompt('That is not a valid choice. Please try again.');
    userInput = readline.question();
  }
  return USER_INPUT_TO_VALID_FORM[userInput];
}

function computerRoundChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES_COMPUTER.length);
  let computerChoice = VALID_CHOICES_COMPUTER[randomIndex];
  return computerChoice;
}

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
         (choice === 'rock' && computerChoice === 'lizard') ||
         (choice === 'paper' && computerChoice === 'rock') ||
         (choice === 'paper' && computerChoice === 'spock') ||
         (choice === 'scissors' && computerChoice === 'paper') ||
         (choice === 'scissors' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'paper') ||
         (choice === 'lizard' && computerChoice === 'spock') ||
         (choice === 'spock' && computerChoice === 'rock') ||
         (choice === 'spock' && computerChoice === 'scissors');
}

function keepGoing() {
  prompt(`Would you like to going (press return key)? `);
  readline.question(); 
}

function exitGameMsg() {
  console.clear();
  console.log('Thank you for playing!');
}

function resetTally() {
  ownScore = 0;
  computerScore = 0;
}

////////////////
// Running the script
////////////////
playRPSEnhanced();