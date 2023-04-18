readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function greetings(arr, obj) {
  console.log(`Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${obj.occupation} around.`);
}

function greetingUser() {
  let response = readline.question("What is your name? ")
  if (response.includes('!')) {
    response = response.replaceAll('!', "");
    console.log(`HELLO ${response.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${response}.`);
  }
}

function multiply(num1, num2) {
  return num1 * num2; 
}

function square(num) {
  return multiply(num, num);
}

function arithmeticInteger() {
  prompt('Enter the first number:');
  firstNum = parseInt(readline.question());

  prompt('Enter the second number:');
  secondNum = parseInt(readline.question()); 

  prompt(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
  prompt(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
  prompt(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
  prompt(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
  prompt(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
  prompt(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);
}

function penultimate(str) {
  words = str.split(' ');
  return words[words.length-2];
}

// Write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise.
function xor(a, b) {
  let result = ((a || b) && !(a && b));
  if (result) {
    return true;
  }
  return false; 
}

function oddities(arr) {
  let oddArr = [];
  for (let ind = 0; ind < arr.length; ind += 2) {
    oddArr.push(arr[ind]);
  }
  return oddArr;
}

function teddyAge() {
  let age = Math.floor((Math.random()*101) + 20)
  console.log(`Teddy is ${age} years old!`);
}
function whenRetire() {
  let age = parseInt(readline.question("What is your age? "));
  let retireAge = parseInt(readline.question("At what age would you like to retire? "));

  let today = new Date(); 
  let currentYear = today.getFullYear(); 

  console.log(`It is ${currentYear}. You will retire in ${retireAge - age + currentYear}.`);
  console.log(`You have only ${retireAge - age} years of work to go!`);
}

function centerOf(str) {
  let length = str.length;

  if (length % 2 === 1) {
    console.log(str[Math.floor(str.length / 2 )]);
  } else {
    console.log(str.slice((str.length/2)-1, (str.length/2)+1));
  }
}

function negative(num) {
  if (num < 0) {
    console.log(num);
  } else {
  console.log(-1*num); 
  }
}
