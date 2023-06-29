/*
2pm - 2:15pm 
Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

Rules:
-Class `Series`. Takes in a string of numbers. Is a sequence of numbers. 
-Slice is the method where you can obtain these consecutive numbers of length that you specify (give as number input). Returns array of array(s), where each nested array is a sequence of that length. 
-if you ask for a sequence of length greater than the initial input, throw an error.

Process:
-`Series` class. One data property for each instance: the `stringOfDigits` property which is a string of the numbers given as input. 
-`slice` method. takes in one input `len` (number type):
  -first, check that the input `len` is not greater than the length of `stringOfDigits`. If it is, throw a new Error with a message. 
  -otherwise, began process. use a helper method to get all the possible consecutive numbers. and return that. 
`getConsecutives`. only one initial input needed, the length of each sequence (because `this` is bound to the instance object, no need to push in `stringOfDigits`). 
  -basically is a for loop. loop from 0 to `stringOfDigits.length - len`, inclusive. 
*/

class Series {
  constructor(stringOfDigits) {
    this.stringOfDigits = stringOfDigits;
  }

  slices(len) {
    if (len > this.stringOfDigits.length) {
      throw new Error('Cannot do this. Ask for a smaller length');
    }

    return this.getConsecutives(len);
  }

  getConsecutives(len) {
    let result = [];
    for (let index = 0; index <= this.stringOfDigits.length - len; index += 1) {
      let sequence = this.stringOfDigits.slice(index, index + len);
      sequence = sequence.split("").map(num => Number(num));
      result.push(sequence );
    }

    return result;
  }
}

module.exports = Series;