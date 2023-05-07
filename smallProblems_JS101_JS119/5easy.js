const readline = require('readline-sync');

/* Cute Angles 
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
*/

// 76.73 
// Degree = 76 (easy enough)
// Minutes = parseInt(0.73 * 60)

function dms(floatingNum) {
  let arr; 
  arr = String(floatingNum).split("."); 
  let degrees = arr[0];
  if (arr.length === 1) {
    return `${degrees}°00'00`;
  } else {
    arr = String(Number(arr[1]) * 60).split(".");
    let minutes = arr[0];
    if (arr.length === 1) {
      return `${degrees}°00'00`;
    }
  }
}
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// Combining Arrays 
function union(arr1, arr2) {
  let combined = [];
  arr1.forEach(num => {
    if (!combined.includes(num)) {
      combined.push(num);
    }
  });

  arr2.forEach(num => {
    if (!combined.includes(num)) {
      combined.push(num);
    }
  });

  return combined;
}
// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/* Halvsies 
Input: array of elements 
Output: array of two elements. each element is a subarray, which contains half of the elements from the original input array

Rules:
-if there is an odd # elts, place the middle elt in the first half array. 
-order matters. 
-if empty array, return array of two empty arrays. 
-f only one elt, still return array of two arrays, with the one element being in first subarray.

DS: 
-Array of two arrays. Must always have this structure. 

Algorithm
-Find out the number of elements in the array. 
Determine stopping point for first subArray. 
Determine stopping point for second subArray. 
*/

function halvsies(arr) {
  let resultArr = [[], []];

  let finalIndex = arr.length; // not including 
  let middleIndex = Math.ceil(arr.length / 2); // not including

  for (let i = 0; i < middleIndex; i += 1) {
    resultArr[0].push(arr[i]);
  }

  for (let i = middleIndex; i < finalIndex; i += 1) {
    resultArr[1].push(arr[i]);
  }

  return resultArr
}

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// Find the duplicate
function findDup(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    } else {
      return arr[i];
    }
  }
}

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

// Combine two lists 
function interleave(arr1, arr2) {
  let resultArr = []; 
  let stoppingIndex = arr1.length; 

  // // Method 1
  // for (let i = 0; i < stoppingIndex; i += 1) {
  //   resultArr.push(arr1[i]);
  //   resultArr.push(arr2[i]);
  // }

  // Method 2 
  arr1.forEach((_, index) => {
    resultArr.push(arr1[index]);
    resultArr.push(arr2[index]);
  })

  console.log(resultArr);
}

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// Multiplicative Average
function multiplicativeAverage(arr) {
  let result = 1; 
  arr.forEach(num => result *= num);
  result = result / arr.length;

  console.log(String(result.toFixed(3)));
}

// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// Multiply Lists 
function multiplyList(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    resultArr.push(arr1[i] * arr2[i]);
  }

  console.log(resultArr); 
}

//multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// List of Digits 
// Method 1 
function digitList(num) {
  let resultArr = [];
  String(num).split("").forEach(numStringForm => resultArr.push(Number(numStringForm)));
  return resultArr;
}

// Method 2 (further exploration)
function digitListMap(num) {
  let resultArr = []; 
  return String(num).split("").map(numStringForm => Number(numStringForm));
}

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

// console.log(digitListMap(12345));       // [1, 2, 3, 4, 5]
// console.log(digitListMap(7));           // [7]
// console.log(digitListMap(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitListMap(444));         // [4, 4, 4]

// How many
function countOccurrences(arr) {
  let countOfOccurrences = {};
  arr.forEach(elt => {
    countOfOccurrences[elt] = countOfOccurrences[elt] || 0; 
    countOfOccurrences[elt] = countOfOccurrences[elt] + 1;
  });

  Object.entries(countOfOccurrences).forEach(pair => {
    console.log(`${pair[0]} => ${pair[1]}`);
  })
}

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// Array Average 
// Using forEach
function average(numArr) {
  let result = 0; 
  numArr.forEach(num => result += num);
  return Math.floor(result / numArr.length);
}
// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

// Using reduce
function averageReduce(numArr) {
  let sum = numArr.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);

  return Math.floor(sum / numArr.length);
}

// console.log(averageReduce([1, 5, 87, 45, 8, 8]));       // 25
// console.log(averageReduce([9, 47, 23, 95, 16, 52]));    // 40

/* After Midnight (Part 1)
Input: integer (either positive, negative, or zero)
Output: string in XX:YY form, where XX = hour of day, YY = minute within that hour 

Rules
-input is integer representing minutes before or after midnight. 
  -If - num, is before. 
  -If + num, is after midnight. Positive numbers won't have the "+" sign shown, as input is of type Number. 
-fcn should work with any integer input. Might need to use % operator.
-Format must always be of length 5. 
  EG: if input is 0, output will be "00:00" for exactly at midnight. 

DS: 
variables. lol 

Algorithm: 
Need to find out if number is positive or negative. Declare var isNeg. 
If positive OR the number is 0, let isNeg = false. if negative, reassign num = -1 * num, and let isNeg = true. 
Now...
  -Convert minutes to number of hours to get hour i.e., %  by 60. 
    -% by 24 additionally, in case number is over 24. Call this var `numHours`
  -Obtain the remainder (if any) to get number of minutes. Can also just do num % 60. Call this var `numMinutes`

if isNeg is false, 
  -Pad the hour and minutes to be of length 2 if they are single digit numbers. 
  -return the string.

if isNeg is true,
  -if `numMinutes` > 0: 
    `numHours` = 24 - `numHours` - 1. 
    `numMinutes` = 60 - `numMinutes` 
  -Pad the hour and minutes to be of length 2 if they are single digit numbers. 
  -return the string.

Would probably want a helper function for the padding 

*/
function timeOfDay(num) {
  let isNeg; 
  if (num >= 0) {
    isNeg = false;
  } else {
    num = -1 * num; 
    isNeg = true; 
  }

  let numHours = Math.floor((num / 60) % 24);
  let numMinutes = num % 60;
  
  let result = convertFormat(numHours, numMinutes, isNeg);

  return `${pad(result[0])}:${pad(result[1])}`;
}

function convertFormat(numHours, numMinutes, isNeg) {
  if (!isNeg) {
      numHours = String(numHours);
      numMinutes = String(numMinutes);
    } else {
      if (numMinutes > 0) {
        numHours = String(24 - numHours - 1);
      } else {
        numHours = String(24 - numHours);
      }

      numMinutes = String(60 - numMinutes);
    }

  return [numHours, numMinutes];
}

function pad(str) {
  if (str.length === 1) {
    return '0' + str;
  }
  
  return str;
}
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 60 * 24;

function afterMidnight(str) {
  let hours = parseInt(str.slice(0,2), 10);
  let minutes = parseInt(str.slice(3), 10);

  return (MINUTES_PER_HOUR * hours + minutes) % MINUTES_PER_DAY; 
}

function beforeMidnight(str) {
  let hours = parseInt(str.slice(0,2), 10);
  let minutes = parseInt(str.slice(3), 10);

  if (hours === 0 && minutes === 0) {
    return 0;
  }

  return (MINUTES_PER_DAY - (MINUTES_PER_HOUR * hours + minutes)) % MINUTES_PER_DAY; 
}
// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);


