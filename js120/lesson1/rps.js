const readline = require('readline-sync');
const VALID_RPS_CHOICES = ['rock', 'paper', 'scissors', 'r', 'p', 's'];
const ONE_CHAR_MAP_TO_FULL_WORD = {r: 'rock', p: 'paper', s: 'scissors'};
const VALID_PLAY_AGAIN_CHOICES = ['y', 'n', 'yes', 'no'];
PLAYER = 0;
COMPUTER = 1;
TIE = 2
const GAMES_TO_WIN = 3;

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

function createScore() {
  return [0, 0];
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: createScore(),

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Rock, Paper, and Scissors!');
    console.log(`Play against the computer and try win in a best of five game.`);
    console.log('Ready? Press enter to get started!')
    readline.question(); 
  },

  displayScores() {
    console.clear();
    console.log(`           _Score_ `);
    console.log(`  Player  |   ${this.score[PLAYER]}   |`);
    console.log(`          |_______|`);
    console.log(` Computer |   ${this.score[COMPUTER]}   |`);
    console.log(`          |_______|`);
    console.log();
  }, 

  updateScore() {
    let currScore = this.score; 
    let winner = this.decideWinner(); 
    if (winner === PLAYER) {
      currScore[PLAYER] += 1; 
    } else if (winner === COMPUTER) {
      currScore[COMPUTER] += 1; 
    } 
  },

  decideWinner() {
    let humanMove = this.human.move; 
    let computerMove = this.computer.move; 

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      return PLAYER;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
    (humanMove === 'paper' && computerMove === 'scissors') ||
    (humanMove === 'scissors' && computerMove === 'rock')) {
      return COMPUTER;
    } else {
      return TIE; 
    }
  },

  displayRoundWinner() {
    this.displayScores(); // call displayScores from within to display score always

    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let winner = this.decideWinner(); 

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if (winner === PLAYER) {
      console.log('You win this round.');
    } else if (winner === COMPUTER) {
      console.log('Computer wins this round.');
    } else {
      console.log("This round is a tie.");
    }
  },

  promptUser() {
    console.log(`Press enter to move on to the next round.`);
    readline.question();
  }, 

  someoneWon() {
    let maxScore = Math.max(...this.score);
    return maxScore === GAMES_TO_WIN;
  },

  displayOverallWinner() {
    let playerScore = this.score[PLAYER];
    let computerScore = this.score[COMPUTER];

    if (playerScore > computerScore) {
      console.log('You won the overall match. Good job!');
    } else {
      console.log('The computer won the overall match.')
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

  clearScore() {
    this.score = createScore(); 
  },

  displayGoodbyeMessage() {
    console.clear();
    console.log('Thanks for playing Rock, Paper, and Scissors. Goodbye :)');
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.displayScores(); // put this here to maintain the score board at all times
      while (true) {
        this.human.choose();
        this.computer.choose();
        this.updateScore(); 
        this.displayRoundWinner();
        if (this.someoneWon() === true) break; 
        this.promptUser();
        this.displayScores();
      }

      this.displayOverallWinner(); 
      if (!this.playAgain()) break;
      this.clearScore(); 
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();


