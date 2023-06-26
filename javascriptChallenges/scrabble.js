/*
3:35pm - 4:05pm (had some initial trouble with the static score method, but resolved eventually.)
Write a program that, given a word, computes the Scrabble score for that word.

Rules:
-Created a Scrabble class. One input, should be the word as a string value. 
-Class has one required method `score`, which returns the score of the word. 

-white spaces do NOT count as anything. So, must remove white space. Can use the replace method, and use `\s` to identify all white space and replace with "". For example, let's say you have the string str. The version with no whitespace is str.replace(/\s/g, ""). 
-if input is, instead, `null` and not a string, the score is 0. 

-scores are case-insensitive. Might mean you want to convert the input word into alll lower case, on top of the other changes.
*/

class Scrabble {
  constructor(word) {
    if (typeof word !== 'string') {
      word = '';
    }

    this.word = word.toUpperCase().replace(/\s/g, "");
  }
  
  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    let tileScore = 0;
    let wordList = this.word.split("");
    wordList.forEach(char => {
      if (char in Scrabble.LETTER_TO_SCORES_EXCLUDE_ONEPTS) {
        tileScore += Scrabble.LETTER_TO_SCORES_EXCLUDE_ONEPTS[char];
      } else {
        tileScore += 1;
      }
    });

    return tileScore; 
  }


  static LETTER_TO_SCORES_EXCLUDE_ONEPTS = {
    'Q': 10,
    'Z': 10, 
    'J': 8, 
    'X': 8,
    'K': 5, 
    'F': 4,
    'H': 4,
    'V': 4,
    'W': 4,
    'Y': 4,
    'B': 3,
    'C': 3,
    'M': 3,
    'P': 3,
    'D': 2,
    'G': 2,
  }
}

module.exports = Scrabble;