class Card {
  static CARDS = [
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

  static SUITS = [
    'Heart',
    'Spades',
    'Diamonds',
    'Clubs',
  ];

  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }

}

class Deck { // Self note: a new instance will have a deck property, which contains an ARRAY of card objects. 
  constructor() {
    this.initializeDeck();
  }

  makeDeck() {
    this.deck = [];
    for (let val = 0; val < Card.CARDS.length; val += 1) {
      for (let suit = 0; suit < Card.SUITS.length; suit += 1) {
        let card = new Card(Card.CARDS[val], Card.SUITS[suit]);
        this.deck.push(card);
      }
    }
  }

  shuffle() {
    for (let index = this.deck.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      [this.deck[index], this.deck[otherIndex]] = [this.deck[otherIndex], this.deck[index]]; // swap elements
    }
  }

  initializeDeck() {
    this.makeDeck();
    this.shuffle(); 
  }

  deal() {
    let card = this.deck.pop(); 
    return card; // is a Card object.
  }
}

// let myDeck = new Deck();
// console.log(myDeck); 
// console.log(myDeck.deck[0].toString());

class Participant {
  static STARTING_AMOUNT_OF_MONEY = 5; 

  constructor() {
    this.hand = []; 
    this.score = 0; 
    this.money = Participant.STARTING_AMOUNT_OF_MONEY; 
  }

  // hit() {} // put in the twentyOne game class. Will need to reference/insert the deck. Want to reduce dependency between Participant/Player/Dealer and Deck, if possible. 
  stay() {} // want to employ polymorphism through inheritance (override in subtypes)
  // isBusted() {} // put this on the twentyOne game class. feels most appropriate there. Will need to compare with value of 21, the maximum score possible. 
  // score() {} //  just feel like this does not belong here. 

  revealEntireHand() {
    console.log(Participant.joinAnd(this.hand)); 
  }

  static joinAnd(arr) {
    if (arr.length === 2) {
      return `${arr[0]} and ${arr[1]}`; // implicitly rely on toString method defined under Cards class. Remember: arr[X] refers to a Card object. 
    }
  
    return `${arr.slice(0, arr.length - 1).join(", ")}, and ${arr.slice(-1)}`;
  }
}

class Player extends Participant {
  constructor() {
    super(Participant);
  }
}

class Dealer extends Participant {
  constructor() {
    super(Participant);
  }

  showPartialHand() { // only for case when dealer has two cards (in the beginning)
    let firstCard = this.hand[0];
    console.log(firstCard); // only show the first card. 
  }
}

class TwentyOneGame {
  constructor() {
    //STUB
    // What sort of state does the game need?
    // A deck? Two participants?
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    //STUB
  }

  showCards() {
    //STUB
  }

  playerTurn() {
    //STUB
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    //STUB
  }

  displayGoodbyeMessage() {
    //STUB
  }

  displayResult() {
    //STUB
  }
}

let game = new TwentyOneGame();
game.start();