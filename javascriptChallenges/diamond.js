/*
10:15am - 11am. Difficult question!

[P]
Input: a letter (string, uppercase letter)
Output: a "diamond" (string format)

[E]
Rules:
-Diamond class
-`makeDiamond`. Static method. Takes in the letter input and outputs the "diamond"
-assume only valid input for now. 
-the letter input has the widest point in the diamond. 
- need to put in whitespace \n in answer. In other words, the result is ONE string.

For second row, the letters (B) are separated by one space
For third row, the letters (C) are separated by three spaces 
For fourth row, the letters (D) are separated by five spaces 

2 => 1 
3 => 3 
4 => 5 
5 => 7 
6 => 9 

Number of spaces in between letters for row n (where n >= 2): 2(n-1) - 1 = 2n - 3.

Define something like 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
A = index 0, row = 1 
B = index 1, row = 2 

Row is one plus the index. Row = n. 

First find what the width `widthWidest` is for the letter input. The width of the diamond is then `widthMax` = `widthWidest` + 2. Need this to determine where to put the other letters.

Math.floor(`widthMax` / 2) = where to put A
Math.floor(`widthMax` / 2) - 1, Math.floor(`widthMax` / 2) + 1 for B
Math.floor(`widthMax` / 2) - 2, Math.floor(`widthMax` / 2) + 2 for C 

[D/A]:
Define helper method `getWidthMax' to find `widthMax`. 
Define static property `LETTERS` to contain all the letters. 
Within the `makeDiamond` method, call upon the helper method `getWidthMax' and `LETTERS` to make the string output. Might want to make another helper method `returnRow` which takes in the `widthMax` and letter of interest . This helper function returns the row of interest. 
*/

class Diamond {
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static getWidthMax(letter) {
    // Special case if trying to find for letter input = 'A'
    if (letter === 'A') {
      return 0; 
    }

    let rowNumber = Diamond.LETTERS.indexOf(letter) + 1; 
    let widthWidest = (2 * rowNumber) - 3; // max width between letters
    let rowMaxWidth = widthWidest + 2; // max width of the row 

    return rowMaxWidth; 
  }

  static makeDiamond(letter) {
    let firstHalf = [];
    let maxWidth = Diamond.getWidthMax(letter);

    let letterIndex = Diamond.LETTERS.indexOf(letter);
    for (let index = 0; index < letterIndex; index +=1) {
      let currLetter = Diamond.LETTERS[index];
      firstHalf.push(Diamond.returnRow(currLetter, maxWidth));
    }

    // Now, form the other half 
    let middleRow = Diamond.returnRow(letter, maxWidth); 
    let lastHalf = firstHalf.slice().reverse(); 
    let result = [...firstHalf, middleRow, ...lastHalf]; 
    return result.join("");
  }

  static returnRow(currLetter, maxWidth) {
    let row = ' '.repeat(maxWidth).split("");
    let currLetterIndex = Diamond.LETTERS.indexOf(currLetter);
    let leftIndex = Math.floor(maxWidth / 2) - currLetterIndex; 
    let rightIndex = Math.floor(maxWidth / 2) + currLetterIndex; 

    row[leftIndex] = currLetter; 
    row[rightIndex] = currLetter;  

    return row.join("") + '\n';
  }

}

module.exports = Diamond;

// console.log(Diamond.getWidthMax('E'));
// console.log(Diamond.makeDiamond('C'));

// console.log(Diamond.getWidthMax('C'));
// console.log(Diamond.returnRow('C', 5));