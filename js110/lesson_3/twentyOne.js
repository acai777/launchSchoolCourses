//////////////////
// Constants
//////////////////
const readline = require('readline-sync');
const PLAYER = '0';
const COMPUTER = '1';
const TIE = 2;
const ACE = 'A';
const FACE_CARDS = ['J', 'Q', 'K'];
const COMPUTER_MIN_STOPPING_SCORE = 17;
const REVEAL_ALL = true;
const PLAYER_RESPONSES = ['s', 'stay', 'h', 'hit'];
const HIGHEST_VALID_SCORE = 21;
const HIT = 'h';
const BEST_FIVE_WIN_SCORE = 3;
const POSSIBLE_ANSWERS = ['y', 'yes', 'n', 'no'];

const CARDS = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

const SUITS = [
  'Heart',
  'Spades',
  'Diamonds',
  'Clubs',
];

////////////////////
// Helper Functions
////////////////////
function welcomeMsg() {
  console.clear(); 
  console.log('Welcome to Twenty-One!');
  console.log('You will play against the computer in a best of five match.');
  console.log('Hit enter when you are ready to begin. Good luck :)');
  readline.question();
}

function goodbyeMsg() {
  console.log('Thank you for playing. We hope you enjoyed this silly game :)');
}

function displayScores(boxScore) {
  console.log(`           _Score_ `);
  console.log(`  Player  |   ${boxScore[PLAYER]}   |`);
  console.log(`          |_______|`);
  console.log(` Computer |   ${boxScore[COMPUTER]}   |`);
  console.log(`          |_______|`);
  console.log();
}

function initializeDeck() {
  let deck = makeDeck();
  shuffle(deck);
  return deck;
}

function makeDeck() {
  let deck = [];
  for (let val = 0; val < CARDS.length; val += 1) {
    for (let suit = 0; suit < SUITS.length; suit += 1) {
      let card = [SUITS[suit], CARDS[val]];
      deck.push(card);
    }
  }
  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function displayCards(playerCards, computerCards, boxScore, revealAll = false) {
  console.clear();
  displayScores(boxScore);

  if (!revealAll) {
    let computerFirstCard = computerCards[0][1];
    console.log(`Dealer has: ${computerFirstCard} and unknown card.`);
    console.log(`You have: ${joinAnd(playerCards)}.`);
  } else {
    console.log(`Dealer's final cards are: ${joinAnd(computerCards)}.`);
    console.log(`Your final cards are: ${joinAnd(playerCards)}.`);
  }

  console.log();
}

function joinAnd(arr) {
  let cards = arr.map(subArr => subArr[1]);
  if (arr.length === 2) {
    return `${cards[0]} and ${cards[1]}`;
  }

  return `${cards.slice(0, cards.length - 1).join(", ")}, and ${cards.slice(-1)}`;
}

function initialDealing(shuffledDeck, playerCards, computerCards) {
  playerCards.push(...shuffledDeck.splice(0,2)); // remove first two cards
  computerCards.push(...shuffledDeck.splice(0,2));
}
function total(cards) {
  let values = cards.map(subArr => subArr[1]);
  let sum = 0;

  values.forEach(value => {
    if (value === ACE) {
      sum += 11;
    } else if (FACE_CARDS.includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(elt => elt === ACE).forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function generateScoreBoard() {
  return {playerScore: 0, computerScore: 0};
}

function updateScores(score, playerCards, computerCards) {
  score.playerScore = total(playerCards);
  score.computerScore = total(computerCards);
}

function playerPrompt() {
  console.log(`Would you like to stay or hit? Select 's' to stay, 'h' to hit.`);
  let answer = readline.question().trim().toLowerCase();
  while (!PLAYER_RESPONSES.includes(answer)) {
    console.log(`Sorry, invalid response. Please try again (s or h).`);
    answer = readline.question().trim().toLowerCase();
  }

  return answer;
}

function playerHits(shuffledDeck, playerCards) {
  playerCards.push(shuffledDeck.pop());
}

function busted(user, score) {
  if (user === PLAYER) return score.playerScore > HIGHEST_VALID_SCORE;
  if (user === COMPUTER) return score.computerScore > HIGHEST_VALID_SCORE;

  return null;
}

function decideWinner(score) {
  if (score.playerScore > HIGHEST_VALID_SCORE) return COMPUTER;
  if (score.computerScore > HIGHEST_VALID_SCORE) return PLAYER;

  if (score.playerScore > score.computerScore) {
    return PLAYER;
  } else if (score.playerScore < score.computerScore) {
    return COMPUTER;
  }

  return TIE;
}

function displayWinnerRound(winner, score) {
  console.log(`Your final score: ${score.playerScore}`);
  console.log(`Computer final score: ${score.computerScore}.`);
  console.log();

  if (winner === PLAYER) {
    console.log('You won this round.');
  } else if (winner === COMPUTER) {
    console.log('The computer won this round.');
  } else {
    console.log(`This round is a tie. Both of you got the same score of ${score.playerScore}! Wow, what are the odds?`);
  }
}

function initializeEmptyHands() {
  return [[], []];
}

function playerPicksCard(shuffledDeck, playerCards, computerCards, score, boxScore) {
  playerHits(shuffledDeck, playerCards);
  updateScores(score, playerCards, computerCards);
}

function playerTurn(shuffledDeck, playerCards, computerCards, score, boxScore) {
  let playerChoice = playerPrompt();
  while (playerChoice[0] === HIT) {
    playerPicksCard(shuffledDeck, playerCards, computerCards, score, boxScore);
    displayCards(playerCards, computerCards, boxScore);
    if (busted(PLAYER, score)) break;
    playerChoice = playerPrompt();
  }
}

function roundEndMsg(user, score) {
  if (user === PLAYER) {
    if (busted(PLAYER, score)) {
      console.log(`You ended up drawing over 21.`);
    } else {
      console.log(`You chose to stay. Press enter to see what the computer decides.`);
      readline.question();
    }
  }

  if (user === COMPUTER && busted(COMPUTER, score)) {
    console.log(`The computer ended up drawing over 21.`);
  }
}

function checkIfLost(user, score) {
  if (user === PLAYER) return busted(PLAYER, score);
  if (user === COMPUTER) return busted(COMPUTER, score);
  return null;
}

function computerTurn(shuffledDeck, playerCards, computerCards, score, boxScore) {
  while (score.computerScore < COMPUTER_MIN_STOPPING_SCORE) {
    computerCards.push(shuffledDeck.pop());
    updateScores(score, playerCards, computerCards);
  }

  // Need this code to update box score BEFORE moving on to next round.
  if (checkIfLost(COMPUTER, score)) {
    boxScore[PLAYER] += 1;
    roundEndMsg(COMPUTER, score);
  } else { 
    if (decideWinner(score) === PLAYER) {
      boxScore[PLAYER] += 1;
    } else if (decideWinner(score) === COMPUTER) {
      boxScore[COMPUTER] += 1;
    }
  }
}

function playerLostFirst(playerCards, computerCards, score, boxScore) {
  boxScore[COMPUTER] += 1; // Need this to update box score BEFORE next round.
  displayCards(playerCards, computerCards, boxScore, REVEAL_ALL);
  roundEndMsg(PLAYER, score);
}

function continueRestOfRound(shuffledDeck, playerCards, computerCards, score, boxScore) {
  roundEndMsg(PLAYER, score);
  computerTurn(shuffledDeck, playerCards, computerCards, score, boxScore);
  displayCards(playerCards, computerCards, boxScore, REVEAL_ALL);
}

function playRound(boxScore) {
  // Initial setup of deck and relevant variables.
  console.clear();
  let shuffledDeck = initializeDeck();
  let [playerCards, computerCards] = initializeEmptyHands();
  let score = generateScoreBoard();
  initialDealing(shuffledDeck, playerCards, computerCards);
  updateScores(score, playerCards, computerCards);
  displayCards(playerCards, computerCards, boxScore);

  // Player turn
  playerTurn(shuffledDeck, playerCards, computerCards, score, boxScore);
  displayCards(playerCards, computerCards, boxScore);

  // Either end round bc playerScore > 21, or Computer turn.
  if (checkIfLost(PLAYER, score)) {
    playerLostFirst(playerCards, computerCards, score, boxScore);
  } else {
    continueRestOfRound(shuffledDeck, playerCards, computerCards, score, boxScore);
  }

  // Decide winner; end of round.
  let winner = decideWinner(score);
  displayWinnerRound(winner, score);

  // Prompt user to move on to next round, if no winner of best of five
  if (!detectBestOfFiveWinner(boxScore)) {
    readline.question('\nPress enter to move on to the next round...');
  }
}

function detectBestOfFiveWinner(boxScore) {
  return boxScore[PLAYER] >= BEST_FIVE_WIN_SCORE || boxScore[COMPUTER] >= BEST_FIVE_WIN_SCORE;
}

function displayBestOfFiveMsg(boxScore) {
  console.log();
  console.log('----------------------------------------------------------');
  console.log(`You finished with a tally of ${boxScore[PLAYER]}.`);
  console.log(`The computer finished with a tally of ${boxScore[COMPUTER]}`);

  if (boxScore[PLAYER] >= BEST_FIVE_WIN_SCORE) console.log(`Congrats on winning the overall best of five!`)
  if (boxScore[COMPUTER] >= BEST_FIVE_WIN_SCORE) console.log(`The computer won the best of five game!`);
  console.log('----------------------------------------------------------');
  console.log();
}

function playAgain() {
  console.log('Play again? (y or n)');
  let answer = readline.question().toLowerCase();

  while (!POSSIBLE_ANSWERS.includes(answer)) {
    console.log('Invalid response. Please try again. (y or n)');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'y' || answer === 'yes') return true;

  console.clear();
  return false;
}

function bestOfFive() {
  while (true) {
    const boxScore = {'0':0, '1':0}
  
    while (true) {
      playRound(boxScore);
      if (detectBestOfFiveWinner(boxScore)) {
        displayBestOfFiveMsg(boxScore);
        break;
      }
    }

    if (!playAgain()) break;
  }
}

////////////////////
// Main Program
////////////////////
welcomeMsg(); 
bestOfFive();
goodbyeMsg();



