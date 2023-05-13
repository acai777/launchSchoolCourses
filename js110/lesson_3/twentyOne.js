//////////////////
// Constants
//////////////////
const readline = require('readline-sync');
const PLAYER = '0'; 

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

const PLAYER_RESPONSES = ['p', 'play', 'h', 'hit'];
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

function displayCards(playerCards, computerCards) {
  console.clear();
  let computerFirstCard = computerCards[0][1];
  console.log(`Dealer has: ${computerFirstCard} and unknown card.`);
  console.log(`You have: ${joinAnd(playerCards)}.`);
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
  console.log(`Would you like to play or hit? Select 'p' to play, 'h' to hit.`);
  let answer = readline.question().trim().toLowerCase(); 
  while (!PLAYER_RESPONSES.includes(answer)) {
    console.log(`Sorry, invalid response. Please try again (p or h).`);
    answer = readline.question().trim().toLowerCase()
  }

  return answer; 
}

function playerHits(shuffledDeck, playerCards) {
  playerCards.push(shuffledDeck.pop()); 
}

function busted(user, score) {
  if (user === PLAYER) {
    return score.playerScore > HIGHEST_VALID_SCORE;
  }

  return score.computerScore > HIGHEST_VALID_SCORE;
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


//console.log(score);


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
console.log('You got busted')

















