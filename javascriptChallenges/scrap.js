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

  static letterRange(letter) {
    let letterRange = [];
    for (let index = 0; index < Diamond.LETTERS.length; index += 1) {
      let currLetter = Diamond.LETTERS[index];
      letterRange.push(currLetter);
      if (currLetter === letter) break; 
    }

    return [...letterRange, ...letterRange.reverse().slice(1)];
  }

  static makeDiamond(letter) {
    let result = [];
    let maxWidth = Diamond.getWidthMax(letter);
    let letterRange = Diamond.letterRange(letter);

    for (let index = 0; index < letterRange.length; index +=1) {
      let currLetter = letterRange[index];
      result.push(Diamond.returnRow(currLetter, maxWidth));
    }

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

console.log(Diamond);
console.log(Object.getOwnPropertyNames(Diamond));

Diamond.test = function() {
  console.log(this);
}

Diamond.test();

let myObj = {
  myFcn() {
    console.log(this);
  }
}
myObj.myFcn();

