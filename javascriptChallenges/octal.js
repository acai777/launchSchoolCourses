/*
4:45pm - 5:05pm 
Implement octal to decimal conversion. Given an octal input string, your program should produce a decimal output. Treat invalid input as octal 0.

Rules:
-use an Octal class. Takes in one STRING input. Input should rep an octal number, but may not be. In which case, you convert to octal zero. 

-invalid inputs (e.g., string 'carrot') should be interpreted as octal value of 0. invalid input also includes any numbers where there is an 8 or 9 digit. Why? The octal system is base 8, so 7 is the highest digit. Same logic in base 10. 

The algorithm to convert the octal number to a decimal number is straightforward. 
With the octal number, you can iterate from right to left, keep track of the exponent to use. Keep track of running sum too. Might be helpful to convert the octal number into a list to take advantage of array methods.

*/

class Octal {
  constructor(input) {
    if (Octal.isValidOctalNumber(input)) {
      this.octal = input;
    } else {
      this.octal = '0';
    }
  }

  toDecimal() {
    let decimalForm = 0;
    let octalList = this.octal.split("");

    let exponent = 0;
    for (let index = octalList.length - 1; index >= 0; index -=1) {
      let digit = Number(octalList[index]);
      decimalForm += digit * (8 ** exponent);
      exponent += 1;
    }

    return decimalForm;
  }


  static isValidOctalNumber(num) {
    if (num.split("").includes('8') 
      || num.split("").includes('9')
      || Number.isNaN(Number(num))) {
      return false;
    }
    return true; 
  }
}

module.exports = Octal;