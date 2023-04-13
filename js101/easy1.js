/*
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

*/

// Leap Years (Part 2)





















