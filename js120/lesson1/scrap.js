let pete = {
  name: 'Pete', 

  printName() {
    console.log(`My name is ${this.name}`);
  },
};

// pete.printName();
// console.log(pete.printName);

function createCar(make, fuelLevel, engineOn) {
  let carObj = {
    make: make, 
    fuelLevel: fuelLevel, 
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= 0.1;
    },

    stopEngine() {
      this.engineOn = false;
    }, 

    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  }

  return carObj;
};

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();

let raceCarOwn = createCar('Jaguar', 0.4, false);

////////////////////////////////////////////////
// PRACTICE PROBLEMS
///////////////////////////////////////////////
function createBook(title, author, read = false) {
  let bookObj = {
    title, 
    author, 
    read,

    getDescription() {
      let readStatus; 
      if (this.read === true) readStatus = 'have';
      if (this.read === false) readStatus = 'haven\'t';
      return `${this.title} was written by ${this.author}. I ${readStatus} read it.`;
    },

    readBook() {
      this.read = true;
    }, 
  };

  return bookObj;
}

let book1 = createBook("Mythos", "Stephen Fry");
let book2 = createBook("Me Talk Pretty One Day", "David Sedaris", false);
let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse", true);

console.log(book1.getDescription()); 
console.log(book2.getDescription());
console.log(book3.getDescription());




/* SCRAP:
function createPlayer(playerType) {
  return {
    playerType: playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        console.log('Please choose what you would like to select: rock, paper, or scissors (r/p/s)');
        let playerChoice = readline.question().toLowerCase();
        while (!VALID_RPS_CHOICES.includes(playerChoice)) {
          console.log(`Sorry, that is an invalid choice. Please try again (r/p/s): `);
          playerChoice = readline.question().toLowerCase();
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

function createHuman() {
  return {
    move: null,

    choose () {
      let choice;

      while (true) {
        console.log('Please choose what you would like to select: rock, paper, or scissors (r/p/s)');
        choice = readline.question().toLowerCase();
        if (VALID_RPS_CHOICES.includes(choice)) break;
        console.log(`Sorry, that is an invalid choice.`);
      }

      if (choice.length === 1) choice = ONE_CHAR_MAP_TO_FULL_WORD[choice]; // allow for single character responses
      this.move = playerChoice;
    },
  };
}


function createComputer() {
  return {
    move: null,

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    }
  };
}


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

*/









