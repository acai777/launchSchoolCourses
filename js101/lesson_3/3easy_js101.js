/*
This file contains all relevant code for Practice Problems, Easy 3. Note that since the problems themselves don't require submission and some don't even require you to code, this file will mostly just be scrap code. That is, it might not contain all relevant code for every question. 
*/

// // Write three different ways to remove all of the elements from the following array
// let numbers = [1, 2, 3, 4];
// while (numbers.length !== 0) {
//   numbers.pop(); 
// }
// console.log(numbers);

// numbers = [1, 2, 3, 4];
// while (numbers.length !== 0) {
//   numbers.shift(); 
// }
// console.log(numbers);

// numbers = [1, 2, 3, 4];
// numbers.length = 0 
// console.log(numbers);

//console.log([1, 2, 3] + [4, 5]);

function isColorValid1(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid2(color) {
  return (color === "blue" || color === "green");
}

function isColorValid3(color) {
  return !!(color === "blue" || color === "green");
}

const isColorValid = color => color === "blue" || color === "green";












