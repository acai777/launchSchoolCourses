const readline = require('readline-sync');

/* Searching 101
output: a prompt
DS: an array of some sort for first five. a var for last number
Algorithm: 
loop and ask user for five numbers. add to array
save last input into var
Check if var in the array - return string based on the conditional expression 
 */
function searching101() {
  let number = ['1st', '2nd', '3rd', '4th', '5th'];
  let firstFiveNum = [];
  let currInput;
  number.forEach(num => {
    currInput = readline.question(`Enter the ${num} number: `);
    firstFiveNum.push(currInput);
  });

  currInput = readline.question("Enter the last number: ");
  if (firstFiveNum.includes(currInput)) {
    console.log(`The number ${currInput} appears in ${firstFiveNum}.`);
  } else {
    console.log(`The number ${currInput} does not appear in ${firstFiveNum}.`);
  }
}

/* Palindromic Strings (Part 1)
Problem: 
  Input: string
  Output: boolean (true or false)

  Explicit rules: 
  -a palindrome reads the same forward and backwards 
  -all characters matter (including empty space)
  -case matters (case sensitive)

Examples: 
  The given examples confirm your assumptions.

Data Structure: 
  Array/collection to store all the characters. That, or just parse the string 

Algorithm:
  Two pointers approach
  
  Have leftPointer set to index 0, rightPointer set to str.length - 1 (right most index of string)
  Check that str[leftPointer] === str[rightPointer].
    -if the two do equal one another, add one to leftPointer, add one to rightPointer
      -repeat this process until str[leftPointer] !== str[rightPointer], or leftPointer > rightPointer
      -if leftPointer > rightPointer, return true. Means you were able to compare every character within the string.
    -if the two do not strictly equal one another, return false

  Loop through entire string until leftPointer > rightPointer 
  
*/

function isPalindrome(str) {
  let leftPointer = 0;
  let rightPointer = str.length - 1; 

  while (leftPointer < rightPointer) {
    if (str[leftPointer] === str[rightPointer]) {
      leftPointer += 1; 
      rightPointer -= 1;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(isPalindrome('madam'));               
// console.log(isPalindrome('Madam'));               
// console.log(isPalindrome("madam i'm adam"));      
// console.log(isPalindrome('356653'));              

/* Palindromic Strings (Part 2) 
Problem:
  input: str
  output: boolean

  Explicit rules:
    -must check if string passed in is palindrome.
    -case insensitive 
    -ignore all non alphanumeric characters
    -can use isPalindrome function you've already made

Examples:
  NA

DA: 
  variables to contain mutated string value

Algorithm:
  Remove all non alphanumeric characters from string. Save this new string into another variable
  Pass isPalindrome() the string, and return the return value from the function call.
*/
function isRealPalindrome(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return isPalindrome(newStr);
}

function isPalindromicNumber(num) {
  return num === Number(String(num).split("").reverse().join(""));
}

/* Running Total
DS: new arr. variable to keep track of total so far

Algorithm:
  create new array container runningArr.
  have a variable to keep track of sum so far, currSum. Set = 0 to start.
  for first element of array arr first, compute first + currSum. 
  Push this value of first + currSum into runningArr
  Reassign currSum to be currSum + first.
  Repeat this process for each element within arr. 
  Return runningArr
*/
function runningTotal(arr) {
  let runningArr = [];
  let currSum = 0; 

  for (let i = 0; i < arr.length; i += 1) {
    runningArr.push(arr[i] + currSum);
    currSum = currSum + arr[i];
  }

  return runningArr; 
}

function runningTotal_MAP(arr) {
  let currSum = 0;
  return arr.map(elt => currSum += elt);
}

/* Letter Counter (Part 1)
 
Problem: 
  input: string of zero or more space separated words
  outut: object showing number of words of different sizes. The key corresponds to a word length, value corresponds to frequency of words of that length

  Rules:
  -space separated "words." Thus "diddle," is a word in the string "diddle, the" - as is "the". 
  -case insensitive 
  -empty string returns empty object

DS: 
  array maybe 

Algorithm:
  -Separate string out into words. Put into a container of some sort
  -Initialize an object called letterCount. Initialize to empty object.
  -For first word in container, check how long it is. 
  -Once know length, check if the length is already a key in the obj. 
    -if it is, simply add one to the value of the key
    -if it is not, create a new object of that key, and set value to 1! 
  -repeat process for all words
  -return obj
  
 */

function wordSizesOLD(str) {

  if (str === '') {
    return {};
  }

  let wordsArr = str.split(" ");
  let letterCount = {}; 

  wordsArr.forEach(word => {
    letterCount[word.length] = letterCount[word.length] || 0;
    letterCount[word.length] = letterCount[word.length] + 1;
  })

  return letterCount;
}

function wordSizes(str) {

  if (str === '') {
    return {};
  }

  str = str.toLowerCase(); 

  let wordsArr = str.split(" ");
  let letterCount = {}; 

  wordsArr.forEach(word => {
    word = onlyLetters(word)
    letterCount[word.length] = letterCount[word.length] || 0;
    letterCount[word.length] = letterCount[word.length] + 1;
  })

  return letterCount;
}

function onlyLetters(str) { // assume input str is lower case
  let newStr = '';
  
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      newStr = newStr + str[i];
    }
  }

  return newStr;
}

// LETTER SWAP
function swap(str) {
  let strArr = str.split(" ");
  let reversed = strArr.map(elt => {

    if (elt.length === 1) { // need this bc otherwise elt[elt.length - 1] and elt[0] will duplicate the one length word twice.
      return elt;
    }

    return elt[elt.length - 1] + elt.slice(1, elt.length - 1) + elt[0]; // slice accounts for if the word is of length 1. See MDN documents
  });

  return reversed.join(" ");
}

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// Convert a string to a number
function stringToInteger(str) {
  // return +str; 
  const DIGITS = {
    0:0,
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
  };

  let arr = str.split("");
  let value = 0; 
  let test = arr.map(num => value = ((10 * value) + DIGITS[num])); // value = 4 
  return value; 
}

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// Convert a String to a Signed Number 
function stringToSignedInteger(str) {
  if (str[0] === '-') {
    return -1 * stringToInteger(str.slice(1));
  } else if (str[0] === '+') {
    return stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
}

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// Convert a Number to a String
function integerToString(int) {
  const ARR = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]

  if (int === 0) {
    return ARR[0];
  }

  let newArr = [];
  let currNum = int; 
  let currDigit;

  while (currNum !== 0) {
    currDigit = (currNum % 10); 
    currNum = (currNum - currDigit) / 10 
    newArr.push(ARR[currDigit]);
  }

  return newArr.reverse().join("");

}

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"

// Convert a Signed Number to a String
function signedIntegerToString(int) {
  if (Math.sign(int) === 1) {
    return '+' + integerToString(int);
  } else if (Math.sign(int) === -1) {
    return '-' + integerToString(-1 * int);
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");

