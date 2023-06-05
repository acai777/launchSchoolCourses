class Board {
  constructor() {
    // We need a way to model the 3x3 grid. Perhaps "squares"?
    // What data structure should we use? An Array? An Object? Something else?
    // What should the data structure store? Strings? Numbers? Square objects?
  }
}

class Square {
  constructor() {
    // We need some way to keep track of this square's marker.
  }
}

class Row {
  constructor() {
    // We need some way to identify a row of 3 squares
  }
}

class Marker {
  constructor() {
    // A marker is something that represents a player's "piece" on the board.
  }
}

class Player {
  constructor() {
    // maybe a "marker" to keep track of this player's symbol (i.e., 'X' or 'O')
  }

  mark() {
    // We need a way to mark the board with this player's marker.
    // How do we access the board?
  }

  play() {
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
  }
}

class Computer extends Player {
  constructor() {
  }
}

class TTTGame {
  constructor() {
    // Need a board and two players
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.displayBoard();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    // show the results of this game (win, lose, tie)
  }

  displayBoard() {
    // display the board, including its current state
  }

  firstPlayerMoves() {
    // the first player makes a move
  }

  secondPlayerMoves() {
    // the second player makes a move
  }

  gameOver() {
    return false;
  }
}

let game = new TTTGame();
game.play();