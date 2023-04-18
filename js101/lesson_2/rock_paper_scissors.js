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
const NUMBER_RULES = 10; 

function prompt(message) {
  console.log(`=> ${message}`);
}

welcomeMsg();
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question(); 
  while (!VALID_CHOICES.includes(choice)) {
    prompt('That is not a valid choice. Please try again.');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt(`Would you like to play again? (y/n)`);
  let answer = readline.question().toLowerCase(); 
  while (answer !== 'y' && answer !== 'n') {
    prompt(`Please enter a valid response; please enter 'y' or 'n'`);
    answer = readline.question().toLowerCase(); 
  }

  if (answer !== 'y') break;
}

function displayWinner(choice, computerChoice) {
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
    prompt(`You won!`);
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
        prompt(`Computer won!`);
  } else {
    prompt(`It's a tie!`);
  }
}

function welcomeMsg() {
  console.clear();

  prompt(`Welcome to Rock Paper Scissors Lizard Spock!`)
  prompt(`This is a game where you must play against the computer in a best of five game`);
  prompt(`You might be wondering which gesture beats what. Here are the possibilities:\n`)
  RULES.forEach(rule => console.log(`     ${rule}`));
  
  console.log(); 
  prompt(`Let's get started.`);
}



