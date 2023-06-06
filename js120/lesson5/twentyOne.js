const readline = require('readline-sync');

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

  getCardValue() {
    return this.rank;
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

  deal(numberCards = 1) {
    let cards = this.deck.splice(0, numberCards); 
    return cards; // is an array of Card objects.
  }
}

// let myDeck = new Deck();
// console.log(myDeck); 
// console.log(myDeck.deck[0].toString());

class Participant {
  static ACE = 'A'; // should these be static methods here, or under cards...?
  static FACE_CARDS = ['J', 'Q', 'K'];
  static STARTING_AMOUNT_OF_MONEY = 5; 
  static HIGHEST_VALID_SCORE = 21;
  static NO_MONEY = 0; 
  static ONE_DOLLAR = 1;

  constructor() {
    this.hand = []; 
    this.score = 0; 
    this.money = Participant.STARTING_AMOUNT_OF_MONEY; 
  }

  hit(deck) {
    let card = deck.deal(); 
    this.addToDeck(card);
  } 

  isBusted() {
    return this.getScore() > Participant.HIGHEST_VALID_SCORE;
  } // debated putting this in the TwentyOneGame class. Mostly bc of the winning score of 21

  getScore() {
    return this.score; 
  } 

  updateScore() {
    let values = this.hand.map(cardObj => cardObj.getCardValue());
  
    values.forEach(value => {
      if (value === Participant.ACE) {
        this.score += 11;
      } else if (Participant.FACE_CARDS.includes(value)) {
        this.score += 10;
      } else {
        this.score += Number(value);
      }
    });
  
    values.filter(elt => elt === Participant.ACE).forEach(_ => {
      if (this.score > 21) this.score -= 10;
    });
  }

  returnEntireHand() {
    return this.hand; 
  }

  addToDeck(cards) {
    cards.forEach(card => this.hand.push(card)); 
  }

  checkIfBroke() {
    return this.money === Participant.NO_MONEY; 
  }

  loseDollar() {
    this.score -= Participant.ONE_DOLLAR; 
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

  returnPartialHand() { // only for case when dealer has two cards (in the beginning)
    let firstCard = this.hand[0];
    return firstCard; // only return the first card. 
  }
}

class TwentyOneGame {
  static INITIAL_HAND_NUMBER_CARDS = 2;
  static DEFAULT_STAY = '';
  static PLAYER_RESPONSES = ['s', 'stay', 'h', 'hit', TwentyOneGame.DEFAULT_STAY];
  static HIT = 'h';

  constructor() {
    this.deck = new Deck(); 
    this.player = new Player(); 
    this.dealer = new Dealer(); 
  }

  start() {
    this.displayWelcomeMessage();

    // Best of five
    while (!this.someoneWon()) {

      // Each round
      while (true) {
        this.dealCards();
        this.showCards();
        this.playerTurn();
        if (this.player.isBusted()) {
          this.playerLostFirst();
        } else {
          this.dealerTurn();
        }
        this.displayResult();
        console.log('reached the end');
        readline.question();
        break;
      }

      break;

    }
    
    this.displayGoodbyeMessage();
  }

  playerLostFirst() {
    let revealALL = true;
    this.player.loseDollar();
    this.showCards(revealALL);
    this.roundEndMsg(this.player);
  }

  roundEndMsg(user) {
    if (user === this.player) {
      if (this.player.isBusted()) {
        console.log(`You ended up drawing over 21.`);
      } else {
        console.log(`You chose to stay. Press enter to see what the computer decides.`);
        readline.question();
      }
    }

    if (user === this.computer && this.computer.isBusted()) {
      console.log(`The computer ended up drawing over 21.`);
    }
  }

  someoneWon() {
    return this.player.checkIfBroke() || this.dealer.checkIfBroke();
  }

  playerPrompt() {
    console.log(`Would you like to stay (stay/s) or hit (hit/h)?`);
    console.log(`Press enter without entering anything to stay.`);
    let answer = readline.question().trim().toLowerCase();
    while (!TwentyOneGame.PLAYER_RESPONSES.includes(answer)) {
      console.log(`Sorry, invalid response. Please try again (s or h).`);
      answer = readline.question().trim().toLowerCase();
    }
    return answer;
  }

  playerTurn() {
    let playerChoice = this.playerPrompt();
    while (playerChoice !== TwentyOneGame.DEFAULT_STAY || playerChoice[0] === TwentyOneGame.HIT) {
      this.player.hit(this.deck);
      this.showCards(); 
      this.player.updateScore();
      if (this.player.isBusted()) break; 
      playerChoice = this.playerPrompt();
    }

  }

  dealCards() {
    this.player.addToDeck(this.deck.deal(TwentyOneGame.INITIAL_HAND_NUMBER_CARDS)); 
    this.dealer.addToDeck(this.deck.deal(TwentyOneGame.INITIAL_HAND_NUMBER_CARDS)); 
  }

  showCards(revealAll = false) {
    console.clear();
    console.log("You have: " + TwentyOneGame.joinAnd(this.player.returnEntireHand()) + ".");

    if (!revealAll) {
      console.log("Dealer has: " + this.dealer.returnPartialHand() + " and an unknown card.");
    } else if (revealAll === true) {
      console.log("Dealer has: "  + TwentyOneGame.joinAnd(this.dealer.returnEntireHand()) + ".");
    }
    console.log();
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Twenty-One!');
    console.log('You will play against the computer.');
    console.log('Each player starts with five dollars.');
    console.log('The game will terminate once one of you has no money left.');
    console.log('Hit enter when you are ready to begin. Good luck :)');
    readline.question();
    console.clear();
  }

  displayGoodbyeMessage() {
    console.log("Thank you for playing!");
  }

  displayResult() {
    //STUB
  }

  static joinAnd(arr) {
    if (arr.length === 2) {
      return `${arr[0]} and ${arr[1]}`; // implicitly rely on toString method defined under Cards class. Remember: arr[X] refers to a Card object. 
    }
  
    return `${arr.slice(0, arr.length - 1).join(", ")}, and ${arr.slice(-1)}`;
  }
}

let game = new TwentyOneGame();
game.start();