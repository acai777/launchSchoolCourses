/*
This file contains all relevant code for Practice Problems, Easy 2. Note that since the problems themselves don't require submission and some don't even require you to code, this file will mostly just be scrap code. That is, it might not contain all relevant code for every question. 
*/

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.replaceAll('important', 'urgent'));

// // Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
// let numbers = [1, 2, 3, 4, 5];
// // numbers.reverse();
// // console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// // numbers.sort((num1, num2) => num2 - num1);
// // console.log(numbers); // [ 5, 4, 3, 2, 1 ]

//   // Method 1 (using slice(), which returns a shallow copy)
// console.log(numbers.slice().reverse()); 

// // Method 2 (using spread syntax)
// console.log([...numbers].sort((num1, num2) => num2 - num1))

// let newNumbers = [];
// numbers.forEach(num => newNumbers.unshift(num));
// console.log(newNumbers);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// let number1 = 8;  // false
// let number2 = 95; // true
// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";
// famousWords = "Four score and " + famousWords; // method 1 
// console.log(famousWords);
// famousWords = "seven years ago...";
// console.log("Four score and ".concat(famousWords));

// let arr = [1, 2, 3, 4, 5]; 
// arr.splice(2, 1);
// console.log(arr);

let arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"], [['hi', 'hello'], ['boo', 'bump']]];

// arr = [].concat(...arr);
// console.log(arr)

// let newArr = [];
// arr.forEach(function(elt) {
//   if (typeof elt === 'string') {
//     newArr.push(elt);
//   } else {
//     elt.forEach(subElt => newArr.push(subElt));
//   }
// });
// console.log(newArr);

// arr = [].concat(...arr);
// console.log(arr)

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// console.log(...Object.entries(flintstones).filter(subArr => subArr[0] === 'Barney' && subArr[1] === 2));
// console.log(Object.entries(flintstones).filter(subArr => subArr[0] === 'Barney' && subArr[1] === 2).shift());

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let title = "Flintstone Family Members"; // 25 
// let half = Math.floor((40 - title.length) / 2); 
// console.log(half);
// console.log(`${' '.repeat(half+1)}${title}${' '.repeat(half)}`)

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split('t').length - 1); 
console.log(statement2.split('t').length - 1); 






















