const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard']

function prompt(message) {
  console.log(`=> ${message}`);
}

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
      (choice === 'spock' && computerChoice === 'paper')) {
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
      (computerChoice === 'spock' && choice === 'paper')) {
        prompt(`Computer won!`);
  } else {
    prompt(`It's a tie!`);
  }
}

