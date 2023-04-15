// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

// Program start
prompt("Welcome to the Calulator!");
prompt("What is the first number?");
let first = readline.question();
while (invalidNumber(first) || first.trimStart() === '') {
  prompt("Hmm...that doesn't look like a valid number.");
  first = readline.question();
}


prompt("What is the second number? ");
let second = readline.question();
while (invalidNumber(second) || second.trimStart() === '') {
  prompt("Hmm...that doesn't look like a valid number.");
  second = readline.question();
}

prompt("What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide ");
let operation = readline.question(); // is a string type
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Hmm...that doesn't look like a valid operation.\n=> Must choose 1, 2, 3, or 4.");
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(first) + Number(second); // need to convert to number types.
    break;
  case '2':
    output = Number(first) - Number(second);
    break;
  case '3':
    output = Number(first) * Number(second);
    break;
  case '4':
    output = Number(first) / Number(second);
    break;
}

prompt(`The result is ${output}`);


