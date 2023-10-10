// console.log(randomWord())
// console.log(randomWord())
// console.log(randomWord())
// console.log(randomWord())
// console.log(randomWord())

document.addEventListener('DOMContentLoaded', () => {
  let message = document.querySelector('#message');
  let letters = document.querySelector('#spaces');
  let guesses = document.querySelector("#guesses");
  let apples = document.querySelector("#apples");
  let replay = document.querySelector("#replay"); 

  let randomWord = (() => {
    let words = ['apple', 'banana', 'orange','pear'];
    return function() {
      if (words.length === 0) return; 
  
      let randomIndex = Math.floor(Math.random() * words.length)
      let randomWord = words.splice(randomIndex, 1)[0];
      return randomWord; 
    }
  })(); 
  
  class Game {
    constructor() {
      this.incorrect = 0; 
      this.lettersGuessed = [];
      this.correctSpaces = 0;
      this.word = randomWord(); 
      
      if (!this.word) {
        this.displayMessage("Sorry, I've run out of words!");
      } else {
        this.word = this.word.split("").map(letter => letter.toUpperCase());
        // console.log(this.word);
        this.init();
      }
    }
  
    createBlanks() {
      let wordContainer = document.querySelector('#spaces');
  
      // Remove any spaces that are currently displayed 
      let oldSpaces = letters.querySelectorAll('span');
      oldSpaces.forEach(span => {
        span.parentNode.removeChild(span);
      });
  
      for (let i = 0; i < this.word.length; i +=1) {
        wordContainer.appendChild(document.createElement('span')); 
      }
    }
  
    displayMessage(text) {
      message.textContent = text;
    }
  
    setClass() {
      apples.classList.remove(...apples.classList);
      apples.classList.add("guess_" + this.incorrect);
    }

    emptyGuesses() {
      let oldGuesses = guesses.querySelectorAll('span');
      oldGuesses.forEach(span => {
        span.parentNode.removeChild(span);
      });
    }

    init() {
      this.bind();
      this.setClass();
      this.hideReplayLink();
      this.emptyGuesses();
      this.createBlanks();
      this.setGameStatus();
      this.displayMessage("");
    }

    isLetter(e) {
      if (e.key.length > 1) {
        return false; 
      }

      let letter = e.key.toUpperCase();
      let asciiCode = letter.charCodeAt();
      if (asciiCode < 65 || asciiCode > 90) {
        return false; 
      }

      return true;
    }

    alreadyGuessed(letter) {
      return this.lettersGuessed.includes(letter);
    }

    addToGuessesArray(letter) {
      this.lettersGuessed.push(letter); 
    }

    addToGuessesDOM(letter) {
      let newGuess = document.createElement('span');
      newGuess.textContent = letter;
      guesses.appendChild(newGuess);
    }

    isCorrectGuess(letter) {
      return this.word.includes(letter);
    }

    addToWordContainer(letter) {
      this.word.forEach((char, index) => {
        if (char.toUpperCase() === letter) {
          letters.querySelectorAll('span')[index].textContent = letter; 
          this.correctSpaces += 1;
        }
      });
    }

    dropApple() {
      apples.className = 'guess_' + String(this.incorrect);
    }

    playerLost() {
      return this.incorrect === 6; 
    }

    playerWon() {
      return this.correctSpaces === this.word.length; 
    }

    displayReplayLink() {
      replay.classList.add('visible'); 
    }

    hideReplayLink() {
      replay.classList.remove('visible'); 
    }
    setGameStatus(status) {
      if (status) {
        document.body.className = status;
      } else {
        document.body.classList.remove('win', 'lose');
      }
    }

    processGuess(e) {
      // Check is letter
      if (!this.isLetter(e)) return; 

      // If letter already guessed, ignore
      let letter = e.key.toUpperCase();
      if (this.alreadyGuessed(letter)) return;
  
      // Add letter to guesses array and guesses container on browser (DOM)
      this.addToGuessesArray(letter);
      this.addToGuessesDOM(letter); 
  
      // Add letter to word container 
      if (this.isCorrectGuess(letter)) {
        this.addToWordContainer(letter); // this.correctSpaces += 1; code must be inside this.addToWordContainer
      } else {
        this.incorrect += 1; 
        this.dropApple(); 
      }

      // Check to see if number incorrect = max allowed guesses (6)
      if (this.playerLost() || this.playerWon()) {
        this.unbind();
        let text = this.playerLost() ? "Sorry! You're out of guesses": "You win!";
        let gameStatus = this.playerLost() ? "lose": "win";
        this.setGameStatus(gameStatus);
        this.displayMessage(text);
        this.displayReplayLink(); 
      }
    }

    bind() {
      this.processGuessHandler = (e) => this.processGuess(e);
      document.addEventListener('keyup', this.processGuessHandler);
    }

    unbind() {
      document.removeEventListener('keyup', this.processGuessHandler);
    }
  }

  new Game();

  replay.addEventListener('click', e => {
    e.preventDefault; 
    new Game(); 
  });
});

/*
STILL NEED TO FIGURE OUT WITH YOUR IMPLEMENTATION:
how to unbind 
how to correctly start a new game.... 

*/

/*
add keypress event to document. 
first check that the key is between a and z, inclusive. CAPS? 

check if key is already in guessed array. if not, add to the guessed array. Also, add to the guess container. if it has, IGNORE. TWO SCENARIOS:
  1) Assuming key is not already in guessed array and you just added it, now also two sub scenarios:
    a) Check if key is in word. If it is, add the corresponding letter to the respective spaces (use index)
    b) If the key is NOT in this.word, add 1 to the incorrect guesses. Change the count of apples. To do so, manipulate the class name. class="guess_0" means all apples are there, class="guess_1" means one apple is lost, etc. ALso, check if the incorrect guesses count = 6. If is, the person has lost the game. 
*/





















