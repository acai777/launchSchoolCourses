// ask the user for the first number
// ask the user for the second number
// ask the user for the operation 
// perform the operation
// display the result of the operation 

const readline = require('readline-sync'); 
console.log("Welcome to the Calulator!");

console.log("What is the first number?");
let first = readline.question();

console.log("What is the second number? ");
let second = readline.question();

console.log("What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide ");
let operation = readline.question(); // is a string type

//console.log(`${first}, ${second}`);

let output; 
if (operation === '1') {
  output = Number(first) + Number(second); // need to convert to number types. 
} else if (operation === '2') {
  output = Number(first) - Number(second);
} else if (operation === '3') {
  output = Number(first) * Number(second);
} else if (operation === '4') {
  output = Number(first) / Number(second);
} 

console.log(`The result is ${output}`);


