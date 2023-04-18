const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard']
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
]
const WINNING_SCORE = 3; 

function prompt(message) {
  console.log(`=> ${message}`);
}

let ownScore = 0;
let computerScore = 0; 
let roundWinner; 
welcomeMsg();
while (ownScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question(); 
  while (!VALID_CHOICES.includes(choice)) {
    prompt('That is not a valid choice. Please try again.');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  roundWinner = winner(choice, computerChoice);
  updateScore(roundWinner); 
  displayRoundWinner(roundWinner); 

  let again = playAgain();
  if (!again) {
    console.clear();
    console.log('Thank you for playing!');
    break;
  }
}

displayOverallWinner(); // will only exit the while loop if have a winner.

////////////////
// Helper functions
////////////////
function winner(choice, computerChoice) {
  prompt(`You choice ${choice}, the computer chose ${computerChoice}.`);
  if ((choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'rock')) {
    return 'ownWin';
  } else if ((computerChoice === 'scissors' && choice === 'paper') ||
      (computerChoice === 'paper' && choice === 'rock') ||
      (computerChoice === 'rock' && choice === 'lizard') ||
      (computerChoice === 'lizard' && choice === 'spock') ||
      (computerChoice === 'spock' && choice === 'scissors') ||
      (computerChoice === 'scissors' && choice === 'lizard') ||
      (computerChoice === 'paper' && choice === 'spock') ||
      (computerChoice === 'rock' && choice === 'scissors') ||
      (computerChoice === 'lizard' && choice === 'paper') ||
      (computerChoice === 'spock' && choice === 'rock')) {
    return 'computerWin';
  } else {
    return 'tie';
  }
}

function updateScore(roundWinner) {
  switch (roundWinner) {
    case 'ownWin':
      ownScore += 1; 
      break;
    case 'computerWin': 
      computerScore += 1; 
      break;
  }
}

function displayRoundWinner(roundWinner) {
  switch (roundWinner) {
    case 'ownWin':
      prompt("You won!");
      break;
    case 'computerWin': 
      prompt("The Computer won!");
      break;
    case 'tie':
      prompt("It's a tie!");
      break;
  }

  console.log(`         Your score: ${ownScore}\n     Computer score: ${computerScore}`);
}

function playAgain() {
  prompt("Would you like to play again? (y/n)"); // Ask to continue. If response is no, break.
  let response = readline.question().toLowerCase();
  while (response !== 'n' && response !== 'y') {
    prompt('Please enter "y" or "n".');
    response = readline.question().toLowerCase();
  }

  if (response === 'y') {
    return true;
  }
  return false;
}

function displayOverallWinner() {
  if (ownScore === WINNING_SCORE) {
    prompt(`You won the best of five! Good job!`);
  } else {
    prompt(`The computer won the best of five!`);
  }
}
function welcomeMsg() {
  console.clear();

  prompt(`Welcome to Rock Paper Scissors Lizard Spock!`)
  prompt(`Play against the computer and try win in a best of five game.`);
  prompt(`You might be wondering which gesture beats what. Here are the possibilities:\n`)
  RULES.forEach(rule => console.log(`     ${rule}`));
  
  console.log(); 
  prompt(`Let's get started.`);
}



