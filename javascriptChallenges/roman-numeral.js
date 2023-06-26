/*
12:40pm - 1:20pm 
Write code that converts modern decimal numbers into their Roman number equivalents.

A bit tricky, as the conversion (via the link) seems to suggest a hidden rule you are not familiar with. For example, 40 = XL. But why can't we say 40 = XXXX? Do we prefer the shorter length? 39 = XXXIX. Your question is basically: when there are multiple ways to convert, which do you pick? 

Compare 8 and 9 . 
8 = VIII
9 = IX 
Ah - I see. The rule is: you should only put one smaller digit in front MAX. For example, if you try to write 8 as IIX, it is confusing, because you have "II", which can be interpreted as simply meaning "2". Your code would break if you tried to write it this way. 

Another rule (gathered from the internet): 
A letter cannot be repeated more than three times. Answers why 40 cannot be XXXX. 

Some other rules. Look at internet for these. 

Moving on to test cases...

Rules:
- don't need to convert numbers larger than about 3000.
- need to create a RomanNumeral class. Takes one argument (a number). 
- The class has one required method, toRoman, which returns a string representing the roman numeral counterpart. 
--------

THe main trick seems to be you need to first get the largest left most possible digit e.g., if num = 1990, the largest is 1000. Then, check if is in collection. If is, great; add that to the resulting roman numeral you will return. Now, the remaining number is 1990 - 1000 = 990. The largest now is 900. Is not in the collection. Now what? If the first number is 9 or greater, round up and get 1000 = M. Include the difference as 1000 - 900 = 100 = C to the left i.e., CM. 

between 9... and 10... 
between 4... and 5... 
Those are areas where it might get tricky. Between the 9... and 10..., and the 4... and 5... numbers. Might want to add those converstions (e.g., for 4, 40, 400, 9, 90, 900) directly to the collection as well. 

*/

const NUM_TO_ROMAN = {
  '1': 'I',
  '4': 'IV', 
  '5': 'V', 
  '9': 'IX',
  '10': 'X', 
  '40': 'XL',
  '50': 'L', 
  '90': 'XC',
  '100': 'C', 
  '400': 'CD',
  '500': 'D', 
  '900': 'CM',
  '1000': 'M' 
}

const NUMBERS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanForm = '';
    let currNum = this.number; 

    while (currNum !== 0) {
      for (let index = 0; index < NUMBERS.length; index += 1) {
        let value = NUMBERS[index];
        if (value <= currNum) {
          while (value <= currNum) {
            romanForm += NUM_TO_ROMAN[value]; 
            currNum -= value; 
          }
          break;
        }
      }
    }
    return romanForm; 
  }
}

module.exports = RomanNumeral; 