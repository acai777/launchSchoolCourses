const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'r', 'p', 's'];
const ONE_CHAR_MAP_TO_FULL_WORD = {r: 'rock', p: 'paper', s: 'scissors'};

  function createPlayer(playerType) {
  return { 
    // possible state: player name?
    playerType: playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        let playerChoice = readline.question('Please choose what you would like to select: rock, paper, or scissors (r/p/s)').toLowerCase(); 
        while (!VALID_CHOICES.includes(playerChoice)) {
          playerChoice = readline.question(`Sorry, that is an invalid choice. Please try again (r/p/s): `).toLowerCase(); 
        }

        if (playerChoice.length === 1) playerChoice = ONE_CHAR_MAP_TO_FULL_WORD[playerChoice]; // allow for single character responses
        this.move = playerChoice; 
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === 'human';
    }
  };
};

function createMove() {
  return {
    // possible state: type of move (rock, paper, scissors)
  };
}

function createRule() {
  return {
    // possible state? not clear whether rules need state
  };
};

// Since we do not know where to put `compare`, let's define
// it as an ordinary function.
let compare = function(move1, move2) {
  // not yet implemented
};

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'), 

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, and Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, and Scissors. Goodbye!');
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner(); 
    this.displayGoodbyeMessage();
  },
};





