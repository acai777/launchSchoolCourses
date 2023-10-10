let randomWord = (function() {
  let words = ['apple', 'banana', 'orange', 'pear'];
  
  return function() {
    let randomIndex = Math.floor(Math.random() * words.length);
    let word = words.splice(randomIndex, 1)[0];
    return word;
  }
})();

function Game() {
  this.word = randomWord(); 
  this.incorrect = 0; 
  this.guessed = [];
  // this.allowedWrong = 6; // don't need this

  if (!this.word) {
    console.log("Sorry, I've run out of words!");
  }
}

Game.prototype = {
  createBlanks() {
    let wordContainer = document.querySelector('#spaces');
    while (wordContainer.childNodes.length != 1) {
      wordContainer.childNodes[1].remove();
    }

    
  }
}




















