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

////////////////////
// 
////////////////////
// let deck = initializeDeck(); 
// let score = generateScore(); 
// let playerCards = [];
// let computerCards = [];

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

console.clear();
let shuffledDeck = initializeDeck();
let playerCards = [];
let computerCards = [];
initialDealing(shuffledDeck, playerCards, computerCards);
displayCards(playerCards, computerCards);

// console.log(playerCards);
// console.log(computerCards);
// console.log(shuffledDeck);












