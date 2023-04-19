/*
This file contains all relevant code for Practice Problems, Easy 1. Note that since the problems themselves don't require submission and some don't even require you to code, this file will mostly just be scrap code. That is, it might not contain all relevant code for every question. 
*/

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4]=undefined;  // what will this line return?
// // guess: [1, 2, 3, <1 empty item>, undefined, <1 empty item>, 5]
// console.log(numbers);

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false
// console.log(str1[str1.length - 1] === '!');
// console.log(str2[str2.length - 1] === '!');

//let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(Object.hasOwn(ages, 'Spot'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// let newStr = munstersDescription.toLowerCase();
// newStr = newStr[0].toUpperCase() + newStr.substring(1)
// console.log(newStr)

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additionalAges);
// console.log(ages);

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// console.log(!!str1.match(/Dino/));
// console.log(!!str2.match(/Dino/));

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino');

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", "Hoppy");

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.split('house')[0]);
// Expected return value:
// => 'Few things in life are as important as '








































