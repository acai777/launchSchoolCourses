/*
This file contains all relevant code for Practice Problems, Medium 1. Note that since the problems themselves don't require submission and some don't even require you to code, this file will mostly just be scrap code. That is, it might not contain all relevant code for every question. 
*/

function printFlintTenTime() {
  let str = "The Flintstones Rock!";
  for (let i = 0; i < 10; i += 1) {
    console.log(`${' '.repeat(i)}${str}`);
  }
}
//printFlintTenTime();

// let munstersDescription = "The Munsters are creepy and spooky.";
// let strArr = munstersDescription.split('');
// for (let i = 0; i < strArr.length; i += 1) {
//   if (strArr[i].match(/[a-z]/)) {
//     strArr[i] = strArr[i].toUpperCase();
//   } else {
//     strArr[i] = strArr[i].toLowerCase();
//   }
// }

// let switchedStr = strArr.join('');
// console.log(switchedStr);

function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } 

  return factors;
}

// console.log(factors(15));






