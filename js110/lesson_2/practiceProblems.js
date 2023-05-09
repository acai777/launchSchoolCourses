// This file contains your code write-up for practice problems under the JS 110 Lesson 2 page. 

// 1
// order the following array of number strings by descending numeric value (largest number value to smallest)
// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => {
//   a = Number(a);
//   b = Number(b);
//   if (a > b) {
//     return -1; 
//   } else if (a < b) {
//     return 1; 
//   } else {
//     return 0;
//   }
// });

// console.log(arr); 

// arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => Number(b) - Number(a));
// console.log(arr); 

// 2
//  order the following array of objects based on the year of publication of each book, from the earliest to the latest
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// books.sort((a, b) => Number(a.published) - Number(b.published));
// console.log(books);

// 3 
// For each of these collection objects, demonstrate how you would access the letter g
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]); 

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]); 

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2]["third"][0][0]); 

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1["b"][1]); 

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]); 

// 4 
// For each of these collection objects, demonstrate how you would change the value 3 to 4.
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4; 

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4 

// let obj1 = { first: [1, 2, [3]] };
// obj1["first"][2][0] = 4 

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2["a"]["a"][2] = 4 

// 5 
// Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Strategy 1: convert obj into array using Object.values() (only care about values), filter, reduce
// console.log(Object.values(munsters).filter(obj => obj["gender"] === 'male'));
let sumMaleAge = Object.values(munsters)
  .filter(obj => obj["gender"] === 'male')
  .reduce((acc, currObj) => currObj["age"] + acc, 0);
//console.log(sumMaleAge);

// Strategy 2: using for/in
sumMaleAge = 0; 
for (let key in munsters) {
  if (munsters[key].gender === 'male') {
    sumMaleAge += munsters[key].age; 
  }
}

//console.log(sumMaleAge);

// Strategy 3: using forEach 
sumMaleAge = 0; 
Object.values(munsters).forEach(obj => {
  if (obj.gender === 'male') {
    sumMaleAge += obj.age; 
  }
});
//console.log(sumMaleAge);

// 6 
munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Object.keys(munsters).forEach(person => {
//   console.log(`${capitalize(person)} is a ${munsters[person].age}-year-old ${munsters[person].gender}.`);
// })

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// 7 
// Given the following code, what will the final values of a and b be? Try to answer without running the code.
// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // arr = [2, [5,8]]

// arr[0] += 2; // arr = [4, [5,8]]
// arr[1][0] -= a; // arr = [4, [3,8]]

// a = 2 
// b = [3,8]

// 8 
// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// strategis: Object.values(), get array of arrays (nested array). 
// now, depending on how you want to output the values, can use map() or another forEach. 
// Use map to access each sub array. Means will output something for each sub array.
// Now, depending on how you want to output the values, can use another map() or a forEach. 
// use another map(). so will be returned an array of equal length as the input. 
// here, want to only return the vowels. 

let vowelsArr = Object.values(obj).map(subArr => {
  return subArr.map(str => {
    let vowels = '';
    str.split("").forEach(char => {
      if ('aeiou'.includes(char)) {
        vowels += char; 
      }
    }); 

    return vowels; 
  });
});

//console.log(vowelsArr);

// 9 
// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order. 
//let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let arrSorted = arr.map(subArr => {
//   let subArrCopy = subArr.slice(); 

//   if (typeof subArr[0] === 'string') {
//     return subArrCopy.sort(); 
//   }

//   if (typeof subArr[0] === 'number') {
//     return subArrCopy.sort((a, b) => a - b);
//   }
// });

// console.log(arr);
// console.log(arrSorted); 
// console.log(arrSorted === arr); // false
/*
input: array of arrays; nested array of two levels. 
output: array of arrays, but each subarray is ordered

rules:
-if subarray contains only strings, sort alphabetically (i.e., standard sort() method will do)
-if subarray contains only numbers, sort numerically in ascending order (smallest to largest)
- want to return a NEW array with the same structure. 

Coding plan: 
-tricky part is returning a NEW array, bc the array is nested. Can do a deep copy using JSON 
Can't do a shallow copy as the references will still be shared (same subArray references)

-OR, just call map. Map returns a new array. Call map twice. Yes! This will work and be simpler. 
 */

// 10 
// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let arrSortedDescending = 
// arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     return subArr.slice().sort((a, b) => {
//       if (a < b) {
//         return 1;
//       } else if (a > b) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });
//   }

//   if (typeof subArr[0] === 'number') {
//     return subArr.slice().sort((a, b) => b - a); 
//   }

// });

// console.log(arr);
// console.log(arrSortedDescending);
// console.log(arr === arrSortedDescending)

// 11 
// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.
//let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// Strategy: do want a deep copy here, since we do not want to modify the original data structure (including the elements themselves, which are properties here). Shallow copies will still contain the same reference for the inner elements/objects. Use JSON methods. 

// let arrSerialize = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(arrSerialize);

// deepCopiedArr.map(obj => {
//   Object.keys(obj).forEach(key => {
//     obj[key] += 1;
//   });
// });

// console.log(deepCopiedArr);
// console.log(arr);

// Another (easier method) is to use use map, but initialize an empty object for each obj and build the obj incrementally while calling the original obj.

// 12 
// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// console.log(arr.map(subArr => {
//   return subArr.filter(elt => elt % 3 === 0);
// }));

// 13 
// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]]; // Want to sort such that arr = [[1, 8, 3], [1, 6, 7], [1, 5, 3]]. Assuming ascending order for now

// arr.sort((a, b) => {
//   let sumOddsA = sumOdds(a);
//   let sumOddsB = sumOdds(b); 

//   return sumOddsA - sumOddsB; 
// })

// console.log(arr); // arr = [[1, 8, 3], [1, 6, 7], [1, 5, 3]]

// function sumOdds(arr) { // sum only the odd numbers and return that sum
//   let sum = 0; 
//   arr.forEach(num => {
//     if (num % 2 === 1) {
//       sum += num; 
//     }
//   });

//   return sum; 
// }
