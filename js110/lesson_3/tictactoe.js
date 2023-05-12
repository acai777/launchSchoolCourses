//////////////////
// Constants
//////////////////
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const POSSIBLE_ANSWERS = ['y', 'yes', 'n', 'no'];
const STRATEGIC_CELL = 5;
const PLAYER = 1;
const GAMES_TO_WIN = 3; 

const WINNING_COMBOS = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const POSSIBLE_INITIAL_RESPONSE = [
  'player', 'p', 'computer', 'c', 'choose', 'ch',
];

////////////////////
// Helper Functions
////////////////////
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function welcomeMsg() {
  console.clear();
  console.log(`This is a best of five game of TIC-TAC-TOE.\nThe first player to win five games wins the overall series.\n`);
}

function displayScores(yourScore, computerScore) {
  console.log();
  console.log(`           _Score_ `);
  console.log(`  Player  |   ${yourScore}   |`);
  console.log(`          |_______|`);
  console.log(` Computer |   ${computerScore}   |`);
  console.log(`          |_______|`);
}

function initializeBoard() {
  let board = {};

  for (let cell = 1; cell <= 9; cell += 1) {
    board[String(cell)] = INITIAL_MARKER;
  }

  return board;
}

function displayBoard(board, yourScore, computerScore) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  displayScores(yourScore, computerScore);

  console.log('\n     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |\n');
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimitor = ', ', joinWord = 'or') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return `${arr[0]} ${joinWord} ${arr[1]}`;
  }

  // All other scenarios
  return `${arr.slice(0, arr.length - 1).join(delimitor)}${delimitor}${joinWord} ${arr[arr.length - 1]}`;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt(`Sorry, that is not a valid.`);
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  // Offense
  let win = isPotentialDecision(board, COMPUTER_MARKER);
  for (let line = 0; line < win.length; line += 1) {
    if (smartChoice(win[line], board, INITIAL_MARKER)) {
      board[smartChoice(win[line], board, INITIAL_MARKER)] = COMPUTER_MARKER;
      return;
    }
  }
  // Defense
  let lose = isPotentialDecision(board, HUMAN_MARKER);
  for (let line = 0; line < lose.length; line += 1) { // pick first available threat, if multiple.
    if (smartChoice(lose[line], board, INITIAL_MARKER)) {
      board[smartChoice(lose[line], board, INITIAL_MARKER)] = COMPUTER_MARKER;
      return;
    }
  }
  // Pick 5 (most strategic position, if available)
  if (isfiveAvailable(board)) {
    board[STRATEGIC_CELL] =  COMPUTER_MARKER;
  } else {
  // Random
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function isPotentialDecision(board, marker) {
  let potential =
  WINNING_COMBOS.filter(arr => {
    let hasPlayerSpace = arr.filter(num => board[num] === marker);
    return hasPlayerSpace.length === 2;
  });

  return potential;
}

function smartChoice(line, board, marker) {
  for (let ind = 0; ind < line.length; ind += 1) {
    if (board[line[ind]] === marker) {
      return line[ind];
    }
  }
  return null;
}

function isfiveAvailable(board) {
  return board[STRATEGIC_CELL] === INITIAL_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board, WINNING_COMBOS);
}

function detectWinner(board, winningLines) {
  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function wonOverallMatch(yourScore, computerScore) {
  if (yourScore >= 3) {
    return `Player`;
  } else if (computerScore >= GAMES_TO_WIN) {
    return `Computer`;
  }

  return undefined;
}

function displayMatchWinner(yourScore, computerScore) {
  prompt(`${wonOverallMatch(yourScore, computerScore)} won the best of five!`);
}

function clearBoard() {
  return initializeBoard();
}

function displayRoundResult(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board, WINNING_COMBOS)} won this round!`);
  } else {
    prompt("It's a tie!");
  }
}

function playAgain() {
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase();

  while (!POSSIBLE_ANSWERS.includes(answer)) {
    prompt('Invalid response. Please try again. (y or n)');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'y' || answer === 'yes') {
    return true;
  }

  console.clear();
  return false;
}

function updateScore(board, yourScore, computerScore) {
  if (someoneWon(board)) {
    let winner = detectWinner(board, WINNING_COMBOS);
    if (winner === 'Player') {
      yourScore += 1;
    } else {
      computerScore += 1;
    }
  }

  return [yourScore, computerScore];
}

function displayQuestion() {
  console.log(`Decide who goes first.`);
  console.log(`Please select either yourself ('player'), the computer ('computer').`);
  console.log(`If you are unsure, select 'choose' - we pick for you.`);
  console.log(`We also accept 'p', 'c', and 'ch' for player, computer, and choose respectively.`);
}

function whoGoesFirst() {
  let response = readline.question().trim().toLowerCase();
  while (!POSSIBLE_INITIAL_RESPONSE.includes(response)) {
    console.log('Invalid response. Please try again. (p, c, or ch');
    response = readline.question().trim().toLowerCase();
  }

  if (response === 'p' || response === 'player') {
    return 'Player';
  } else if (response === 'computer' || response === 'c') {
    return 'Computer';
  }

  // Random
  let randomChoice = Math.floor(Math.random() * 2);
  if (randomChoice === PLAYER) return 'Player';
  return 'Computer';

}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'Player') {
    return 'Computer';
  }

  return 'Player';
}

//////////////////
// Main Program
//////////////////
// Loop for the entire program
welcomeMsg();
while (true) {
  displayQuestion();
  let currentPlayer = whoGoesFirst();

  let board = initializeBoard();
  displayBoard(board);

  let yourScore = 0;
  let computerScore = 0;
  let whoMovesNext; // need this to maintain consistency in who gets to play next across the different rounds.

  // Inner loop for the match (best of five)
  while (true) {

    if (whoMovesNext) {
      currentPlayer = whoMovesNext;
    }

    // Inner while loop for each round
    while (true) {
      displayBoard(board, yourScore, computerScore);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    [yourScore, computerScore] = updateScore(board, yourScore, computerScore);
    displayBoard(board, yourScore, computerScore);
    displayRoundResult(board);
    if (wonOverallMatch(yourScore, computerScore)) break;

    console.log(`Press any button to go on to the next round`);
    readline.question();
    board = clearBoard();
    whoMovedNext = currentPlayer;
  }

  displayMatchWinner(yourScore, computerScore);
  if (!playAgain()) break;
}

prompt('Thanks for playing Tic Tac Toe!');
