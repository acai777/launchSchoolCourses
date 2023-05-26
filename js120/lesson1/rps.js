const readline = require('readline-sync');
const VALID_RPS_CHOICES = ['rock', 'paper', 'scissors', 'r', 'p', 's'];
const ONE_CHAR_MAP_TO_FULL_WORD = {r: 'rock', p: 'paper', s: 'scissors'};
const VALID_PLAY_AGAIN_CHOICES = ['y', 'n', 'yes', 'no'];

function createPlayer() {
  return {
    move: null,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose () {
      let choice;

      while (true) {
        console.log('Please choose what you would like to select: rock, paper, or scissors (r/p/s)');
        choice = readline.question().toLowerCase();
        if (VALID_RPS_CHOICES.includes(choice)) break;
        console.log(`Sorry, that is an invalid choice.`);
      }

      if (choice.length === 1) choice = ONE_CHAR_MAP_TO_FULL_WORD[choice]; // allow for single character responses
      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    }
  };

  return Object.assign(playerObject, computerObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, and Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, and Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
              (humanMove === 'paper' && computerMove === 'scissors') ||
              (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question().toLowerCase();
    while (!VALID_PLAY_AGAIN_CHOICES.includes(answer)) {
      console.log(`Sorry, that is an invalid choice. Please try again (y/n): `);
      answer = readline.question().toLowerCase();
    }

    return answer[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();


