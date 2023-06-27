/*
925pm - 10pm (35min) 

Write a program that, given a natural number and a set of one or more other numbers, can find the sum of all the multiples of the numbers in the set that are less than the first number. If the set of numbers is not given, use a default set of 3 and 5.

10, [3,5] => [3,5,6,9] => sum = 23 (do not include one)

Rules (after doing E)
-Examining the test cases, Q is more complex than expected. Must create a `SumOfMultiples` class. The class...
  -static `to` method. Takes one argument, the number to sum up to. Seems like a default set of numbers [3, 5] is used. 
  -class itself takes in a many arguments. These, presumably, are what is in the set of numbers. 
  -there is instance `to` method. You use this number and the set of number(s) to sum all multiples of numbers in the set that are less than the first number. Do not overcount. Return this sum.
  
D: 
store the numbers in an array. Use rest syntax. 
need to find unique multiples of numbers in set that are less than a given number. Can abstract to a helper method. 

A:
-class constructor. use rest syntax. Save set into a key-value property. `setNumbers`
-write the instance `to` method. Takes one number input `firstNum`.
Must use `firstNum` and `setNumbers`  to find all multiples up to but not including `firstNum`. Call this new set `multiplesArr`. Helper method `_getMultiples`
-sum `multiplesArr` and return the sum. 

-write static `to` method. Create a new `SumOfMultiples` class and call the instance `to` method using [3,5] as the set of numbers.
*/

class SumOfMultiples {
  constructor(...setNumbers) {
    if (setNumbers.length === 0) {
      setNumbers = [3, 5];
    }
    this.setNumbers = setNumbers;
  }

  static to(firstNum) {
    return new SumOfMultiples().to(firstNum);
  }

  to(firstNum) {
    let multiples = this._getMultiples(firstNum);
    return multiples.reduce((acc, currVal) => acc + currVal, 0);
  }

  _getMultiples(firstNum) { 
    let multiples = [];
    this.setNumbers.forEach(num => {
      let curr = num; 
      while (curr < firstNum) {
        if (!multiples.includes(curr)) {
          multiples.push(curr);
        }

        curr = curr + num; // tricky bug. originally had this inside the if statement above
      }
    });

    return multiples;
  }
}

module.exports = SumOfMultiples; 

// let myObj = {
//   'setNumbers': [3,5],
// }

// myObj['_getMultiples'] = SumOfMultiples._getMultiples; 
// console.log(myObj._getMultiples(100));











