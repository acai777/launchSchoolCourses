//////////////////
// Constants
//////////////////
const readline = require('readline-sync');
const PLAYER = '0'; 
const COMPUTER = '1';
const TIE = 2;

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

const PLAYER_RESPONSES = ['s', 'stay', 'h', 'hit'];
const HIGHEST_VALID_SCORE = 21; 

////////////////////
// Helper Functions
////////////////////
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

function displayCards(playerCards, computerCards, revealAll = false) {
  console.clear();

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
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value); 
    }
  });

  values.filter(elt => elt === 'A').forEach(_ => {
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
    answer = readline.question().trim().toLowerCase()
  }

  return answer; 
}

function playerHits(shuffledDeck, playerCards) {
  playerCards.push(shuffledDeck.pop()); 
}

function busted(user, score) {
  if (user === PLAYER) return score.playerScore > HIGHEST_VALID_SCORE;
  if (user === COMPUTER) return score.computerScore > HIGHEST_VALID_SCORE;
}

function decideWinner(score) {
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

  if (winner === PLAYER) {
    console.log('You won the game of twenty one. Congrats!');
  } else if (winner === COMPUTER) {
    console.log('The computer won the game!');
  } else {
    console.log(`Both of you got the same score of ${score.playerScore}! Wow, what are the odds?`);
  }
}

////////////////////
// Main Programs
////////////////////
console.clear();
let shuffledDeck = initializeDeck(); // generates randomized deck.
let playerCards = [];
let computerCards = [];
let score = generateScoreBoard();
initialDealing(shuffledDeck, playerCards, computerCards); // initial dealing. 
updateScores(score, playerCards, computerCards);
displayCards(playerCards, computerCards); // display cards. 

// Player turn 
while (true) {
  let playerChoice = playerPrompt();
  if (playerChoice === 'stay' || playerChoice === 's') break;
  playerHits(shuffledDeck, playerCards); 
  updateScores(score, playerCards, computerCards);

  if (busted(PLAYER, score)) break; 
  displayCards(playerCards, computerCards);
}

displayCards(playerCards, computerCards);
if (busted(PLAYER, score)) {
  console.log(`You ended up drawing over 21. You lost! Would you like to play again?`);
} else {
  console.log(`You chose to stay! Press any key to see what the computer decides.`);
  readline.question();
}

// Computer Turn
while (score.computerScore < 17) {
  computerCards.push(shuffledDeck.pop()); 
  updateScores(score, playerCards, computerCards);
  if (busted(COMPUTER, score)) break; 
} 

// Result of the round
displayCards(playerCards, computerCards, true);
if (busted(COMPUTER, score)) {
  console.log(`The computer ended up drawing over 21. You won! Would you like to play again?`);
} else {
  let winner = decideWinner(score);
  displayWinnerRound(winner, score);
}













