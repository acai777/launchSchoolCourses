/*
This file contains all relevant code for Practice Problems, Hard 1. Note that since the problems themselves don't require submission and some don't even require you to code, this file will mostly just be scrap code. That is, it might not contain all relevant code for every question. 
*/

// // A) 
// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // ["one"]
// console.log(`two is: ${two}`); // ["two"]
// console.log(`three is: ${three}`); // ["three"] 
// // is just reassignment 

// // B) 
// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // ["one"]
// console.log(`two is: ${two}`); // ["two"]
// console.log(`three is: ${three}`); // ["three"]
// // is just reassignment again

// // C) 
// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // ["two"]
// console.log(`two is: ${two}`); // ["three"]
// console.log(`three is: ${three}`); // ["one"]

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}




