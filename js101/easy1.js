// Isn't it Odd?
function isOdd(int) {
  if (int < 0) {
    return int % 2 === -1; 
  } else {
    return int % 2 === 1;
  }
} // NOTE that JS's % operator computes the remainder, NOT the modulo value like Python's % operator. 

// Odd Numbers: Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
let i = 1; 
while (i < 100) {
  console.log(i);
  i += 2; 
}

// Even Numbers: Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
for (let i = 2; i <= 99; i += 2) {
  console.log(i);
}

// How big is the room? Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.
// NOTE: need to install module readline-sync. Type "npm install readline-sync" within directory of interest. All subdirectories will be able to use the module, so put in root directory. 
function howBig() {
  let rlSync = require('readline-sync');
  let length = parseInt(rlSync.question('Enter the length of the room in meters:'));
  let width = parseInt(rlSync.question('Enter the width of the room in meters:'));
  let sqMeters = length*width.toFixed(2); 
  let sqFeet = sqMeters*10.7639.toFixed(2); 
  console.log(`The area of the room is ${sqMeters} square meters (${sqFeet} square feet).`);
}

// Tip calculator
function tip() {
  let rlSync = require('readline-sync');
  let bill = parseFloat(rlSync.question('What is the bill? '));
  let perctge = parseFloat(rlSync.question('What is the tip percentage? '));

  let tip = ((bill*perctge)/100); // type: string
  let total = (bill + tip); // (bill + tip) converts to type string. toFixed() can't work on string types.

  console.log(`The tip is \$${tip.toFixed(2)}\n The total is \$${total.toFixed(2)}.`);
}

// Sum or Product of Consecutive Integers. Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
function sumOrProduct() {
  rlSync = require('readline-sync');
  let int = parseInt(rlSync.question('Please enter an integer greater than 0: '));
  let response = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

  // compute sum
  if (response === 's') {
    let sum = 0; 
    for (let i = 1; i <= int; i += 1) {
      sum += i; 
    }
    console.log(`The sum of the integers between 1 and ${int} is ${sum}.`);
  } else if (response === 'p') {
  // compute product
    let product = 1; 
    for (let i = 1; i <= int; i += 1) {
      product *= i; 
    }
    console.log(`The product of the integers between 1 and ${int} is ${product}.`);
  } else {
    console.log('You gave an incorrect response. Please try again.');
    sumOrProduct();
  }
}

// Short Long Short (can assume strings are of dif length)
function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

// Leap Years (Part 1)
function isLeapYearOne_long(yr) {
  if (yr % 4 === 0) {
    if (yr % 100 === 0) {
      if (yr % 400 === 0) {
        return true;
      } else {
      return false;
      }
    } else {
      return true;
    } 
  } else {
    return false;
  }
}

function isLeapYearOne(yr) {
  if (yr % 400 === 0) { 
    console.log(true); 
    return true; 
  } else if (yr % 100 === 0) {
    console.log(false);
    return false;
  } else if (yr % 4 === 0) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// Leap Years (Part 2)
function isLeapYearTwo(yr) {
  if (yr >= 1752) {
    if (yr % 400 === 0) { 
      console.log(true); 
      return true; 
    } else if (yr % 100 === 0) {
      console.log(false);
      return false;
    } else if (yr % 4 === 0) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  } else {
    console.log(yr % 4 === 0);
    return yr % 4 === 0; 
  }
}

// Multiples of 3 and 5
function multisumOne(capNum) {
  let result = 0; 
  for (let i = 0; i <= capNum; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  console.log(result);
}

function multisum(capNum) {
  let multiples = [];
  let factors = [3, 5]; 
  let result;

  factors.forEach(function(factor) {
    let multiple; 
    for (multiple = factor; multiple <= capNum; multiple += factor) {
      if (multiples.indexOf(multiple) === -1) {
        multiples.push(multiple);
      }
    }
  });

  result = multiples.reduce((sum, num) => sum + num, 0);
  console.log(result);
}

// UTF-16 String Value. Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
function utf16Value(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i +=1) {
    sum += str.charCodeAt(i);
  }

  console.log(sum);
}

















