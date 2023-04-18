// A file to practice JS questions related to lesson 2. 


// PSEUDOCODE 
// a function that returns the sum of two numbers 
/*
START 

Given two numbers, num1 and num2

SET result = num1 + num2
PRINT result

END 
*/

// function addName(arr, name) {
//   arr = arr.concat([name]);
//   console.log(arr)
// }

// let names = ["bob", "kim"];
// addName(names, "jim");
// console.log(names); // => [ 'bob', 'kim', ]


// function capitalize() {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim() {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);

let names = ['kim', 'joe', 'sam'];
names.forEach((_, index) => {
  console.log(`${index + 1}: got a name!`);
});

// logs
// => 1: Got a name!
// => 2: Got a name!
// => 3: Got a name!






