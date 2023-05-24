// This file contains code for the practice problems for the JS 119 interview 
//////////////////////////////////////////////////////////////////////////////

function scramble(str1, str2) {
  let arrayFormStr1 = str1.split("");
  let arrayFormStr2 = str2.split("");

  // console.log(arrayFormStr1);
  // console.log(arrayFormStr2);

  for (let i = 0; i < arrayFormStr2.length; i += 1) {
    if (!arrayFormStr1.includes(arrayFormStr2[i])) {
      return false; 
    } else {
      let ind = arrayFormStr1.indexOf(arrayFormStr2[i]); 
      arrayFormStr1.splice(ind, 1);
    }
  }

  return true; 

}

// console.log(scramble('javaass', 'jjss'));
// console.log(scramble('rkqodlw', 'world'));


function repeatedSubstringPattern(str) { // this method is extra because the repeating substring MUST start off with substrings where the first index = 0. If not, then you can't repeat. Think about it. So while your method/code up works, it contains extra steps that are not necessary. 

  let allSubstrings = getAllSubstrings(str); 

  for (let i = 0; i < allSubstrings.length; i += 1) {
    let currStr = allSubstrings[i];
    // console.log(currStr)
    while (currStr.length <= str.length) {
      if (currStr === str) {
        return true;
      }
      currStr = currStr + currStr; 
    }
  }

  return false; 
}

function getAllSubstrings(str) {
  let relevantSubstringsArr = []; 

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i; j < str.length; j += 1) {

      if (j - i + 1 > Math.floor(str.length / 2)) continue; 

      let currSubstr = str.slice(i, j+1); 
      relevantSubstringsArr.push(currSubstr)
    }
  }
  // console.log(relevantSubstringsArr);
  return relevantSubstringsArr; 
}

// console.log(repeatedSubstringPattern('abab') === true);
// console.log(repeatedSubstringPattern('aba') === false);
// console.log(repeatedSubstringPattern('aabaaba') === false);
// console.log(repeatedSubstringPattern('abaababaab') === true);
// console.log(repeatedSubstringPattern('abcabcabcabc') === true);

function commonChars(arrOfStrings) {
  let result = [];
  let firstWord = arrOfStrings[0]; 
  let copyArr = arrOfStrings.slice();

  for (let i = 0; i < firstWord.length; i += 1) {
    let inAllWords = true; 
    for (let j = 1; j < copyArr.length; j += 1) {
      if (copyArr[j].includes(firstWord[i])) {
        let currInd = copyArr[j].indexOf(firstWord[i]);
        copyArr[j] = copyArr[j].slice(0, currInd) + copyArr[j].slice(currInd + 1); 
      } else {
        inAllWords = false; 
        break; 
      }
    }

    if (inAllWords) result.push(firstWord[i]);
  }
  console.log(arrOfStrings);
  return result; 
}

// console.log(commonChars(['a', 'b']));
// console.log(commonChars(['ab', 'bc']));
// console.log(commonChars(['bella', 'label', 'roller']));
// console.log(commonChars(['cool', 'lock', 'cook']));
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));
// console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']));

 /*
 Input: two strings 
 Output: boolean indicating whether or not a substring appears in both of the strings

 Rules: 
 -substring has to be longer than one string. Minimum two characters for sth to be a substring 
 -Case-insensitive. 'Ab' equivalent to 'ab' for our purposes 
 -substring: contiguous sequence of characters of the string s.t. it is at least two characters long. 


 Approach:
 -Find all valid substrings of one of the strings. 
 -Go through each of those substrings, see if they are also a substring of the second string. 
 If any are, we know we have a solution. If not, we can say that there are no mutual substrings between the two input strings. 
 */

function substringTest(str1, str2) {
  let lowerCaseStr1 = str1.toLowerCase(); 
  let lowerCaseStr2 = str2.toLowerCase();
  let substringsOfStr1Arr = getAllValidSubstr(lowerCaseStr1); 

  for (let index = 0; index < substringsOfStr1Arr.length; index += 1) {
    if (lowerCaseStr2.indexOf(substringsOfStr1Arr[index]) !== -1) {
      return true; 
    }
  }

  return false; 
}

function getAllValidSubstr(str) {
  let validSubstringsArray = [];
  for (let leftIndex = 0; leftIndex < str.length - 1; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < str.length; rightIndex += 1) {
      let substr = str.slice(leftIndex, rightIndex + 1);
      validSubstringsArray.push(substr);
    }
  }
  return validSubstringsArray;
}

// console.log(getAllValidSubstr('fun'));

// console.log(substringTest('Something', 'Fun'));
// console.log(substringTest('Something', 'Home'));
// console.log(substringTest('Something', 'Fun'));
// console.log(substringTest('Something', ''));
// console.log(substringTest('', 'Something'));
// console.log(substringTest('BANANA', 'banana'));
// console.log(substringTest('test', 'lllt'));
// console.log(substringTest('', ''));
// console.log(substringTest('1234567', '541265'));
// console.log(substringTest());

/*
Input: array of strings. Can we assume the array has three elements? 
Output: String value of the longest common prefix

Rules: 
-all string elements in the input array are lowercase letters. 
-if there is no common prefix, to return an empty string. 
-Can assume array has at least two strings. 

Questions: 
Can we assume the array has three elements? No.
What do we mean by prefix? Yes, must start the string. 

Approach 
Two for loops:

Have a result variable to keep track of the longest prefix thus far. 
THe outer one to iterate through the first string. Grab the character in question 
An inner loop to go through each subsesquent string at that particular index. See if the char matches. 
If you can iterate through the entire array without breaking, you know you have one common character in prefix string. 

If, at any point, you break, you know that the longest common prefix has been decided. 
 */

function longestCommonPrefix(arrOfStrings) {
  let longestCommon = '';
  let firstString = arrOfStrings[0]; 

  for (let ind = 0; ind < firstString.length; ind += 1) {
    let isCommon = true; 

    for (let word = 1; word < arrOfStrings.length; word += 1) {
      if (firstString[ind] === arrOfStrings[word][ind]) {
        continue; 
      } else {
        isCommon = false; 
        break; 
      }
    }

    if (!isCommon) {
      break; 
    } else {
      longestCommon += firstString[ind]; 
    }
  }
  return longestCommon; 
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
// console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate']));
// console.log(longestCommonPrefix(['throne', 'dungeon']));
// console.log(longestCommonPrefix(['throne', 'throne']));

/*
12:14pm - 12:32pm. Took 16 minutes. 
Input: array of integers 
Output: a Number corresponding to the breaking point index. By breaking point index, all we mean is that the sum of all numbers to the left equals the sum of all numbers to the right at that index. 

Rules: 
-If there is no such index, return -1 
-Array can be of whatever length 
-The starting and end indices are fair game. If you have an empty array on one side, that will correspond to a sum of 0. 

Approach: 
Have a for loop to loop through indices of the array. Want to scout for potential breaking points 
At each potential breaking point/index, get the sum of the subarray to the left. get the sum of the subarr to the right. Compare the two sums. If equal, the index is the return value. If not, continue. 

If you have found no solution by the end of the loop, return -1.
*/

function findEvenIndex(arrOfIntegers) {
  for (let index = 0; index < arrOfIntegers.length; index += 1) {
    let [sumLeft, sumRight] = getSumOfSubArrays(arrOfIntegers, index);
    if (sumLeft === sumRight) {
      return index;
    }
  }
  return -1; 
}

function getSumOfSubArrays(arrOfIntegers, index) {
  let leftArr = arrOfIntegers.slice(0, index);
  let rightArr = arrOfIntegers.slice(index + 1);

  let leftSum = leftArr.reduce((acc, currVal) => acc + currVal, 0);
  let rightSum = rightArr.reduce((acc, currVal) => acc + currVal, 0);

  return [leftSum, rightSum];

}

// console.log(findEvenIndex([1,2,3,4,3,2,1]));
// console.log(findEvenIndex([1,100,50,-51,1,1]));
// console.log(findEvenIndex([1,2,3,4,5,6]));
// console.log(findEvenIndex([20,10,30,10,10,15,35]));
// console.log(findEvenIndex([20,10,-80,10,10,15,35]));
// console.log(findEvenIndex([10,-80,10,10,15,35,20]));
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]));

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// PRACTICE PROBLEMS
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


/////////////////////
// 1
/////////////////////
// TIME: 1:00pm - 1:09pm. Took 9 minutes to solve. 
// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

/* 
input: array of numbers 
output: array of the same length of numbers, where the numbers at index i corresponds to the total number of unique numbers in the array smaller than arr[i]. Unique, so no double counting 

rules:
-Only count the unique values. Only count each number once.
-order matters 

Two loops
Outer for loop to consider each element at hand and get the count of smaller unique values for that value 
let seen = []; add seen, smaller elements to the array seen. If have already seen this element, continue on to the next element. 
Inner for loop to actually do the comparisons for the outer element. Loop through all elements of array again. 

Order matters 
Want to only count the unique values. 
*/

function smallerNumbersThanCurrent(arrOfIntegers) {
  let countArr = []; 
  for (let ind = 0; ind < arrOfIntegers.length; ind += 1) {
    let currInteger = arrOfIntegers[ind];
    let seen = [currInteger];
    let countofSmaller = 0; 

    for (let j = 0; j < arrOfIntegers.length; j += 1) {
      let comparisonInteger = arrOfIntegers[j];
      if (seen.includes(comparisonInteger)) {
        continue;
      }

      if (currInteger > comparisonInteger) {
        countofSmaller += 1; 
      }

      seen.push(comparisonInteger);
    }

    countArr.push(countofSmaller);
  }

  return countArr; 
}

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

/////////////////////
// 2
/////////////////////
// 1:10pm - 1:25pm. Took 15minutes. Nice job. 
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

/*
input: array of integers 
output: the minimum sum of 5 consecutive numbers in the array

Rules: 
-If there are less than 5 elements, return null 
-We can work with negative integers 
-By consecutive, we mean contiguous integers; they are next to each other in the array. 

Approach: 
1) Check if have at least five elements in array. If not, return null. If you do, continue
  - Initialize a `minSum` = Infinity 
2) start from the left most element. Call this `index`. Find the subarray of five contiguous elements.
3) Find the sum of these five contiguous elements 
4) Compare sum with the minimum `minSum` we have seen thus far. If is smaller, replace `minSum` with the min sum we have just seen. If not, continue. 
5) Now move on to the index one place over to the right i.e., `index` = `index` + 1. Repeat steps 2-4. 
6) Return the minimum seen overall
*/

function minimumSum(arrOfIntegers) {
  if (arrOfIntegers.length < 5) {
    return null;
  }

  let minSum = Infinity; 
  for (let index = 0; index < arrOfIntegers.length - 4; index += 1) {
    let currSum = getSumofFiveInt(arrOfIntegers, index); 
    minSum = Math.min(minSum, currSum);
  }

  return minSum;
}

function getSumofFiveInt(arrOfIntegers, index) {
  let arrOfFive = arrOfIntegers.slice(index, index + 5); 
  let sum = arrOfFive.reduce((acc, currVal) => acc + currVal, 0);
  return sum; 
}

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);


/////////////////////
// 3
/////////////////////
// 1:27pm - 1:45pm. Took 18minutes. 
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

/*
input: string
output: a string that is a manipulated version of the input string
      - every fourth character in every second word is converted to an uppercase. 
      - all other characters should remain the same 

Rules: 
- If the second word is under four characters long, no changes happen. 
- words are also separated by single empty space ' '. 
- By "every second word," it is every other word starting from the second word 

Approach: 
Break up the string into an array of the words. 
Iterate through. Have a variable tracking whether the current word we are on is a second word. let isSecondWord = false; 
Once on second word, convert four char to upper case, if there is one. Replace the word at that spot in the array with this mutated word. 
  - if the word is under 4 characters, return the word as is. 
Join the manipulated array back into a string with the " " delimitor. Return this. 
*/

function toWeirdCase(str) {
  let arrOfWords = str.split(" ");

  let isSecondWord = false; 
  arrOfWords.forEach((currWord, index) => {
    if (isSecondWord) {
      let convertedWord = makeFourthUpperCase(currWord); 
      arrOfWords[index] = convertedWord;
    } 
    isSecondWord = !isSecondWord; 
  });

  return arrOfWords.join(" ");
}

function makeFourthUpperCase(currWord) {
  if (currWord.length < 4) {
    return currWord; 
  } 
  currWord = 
    currWord.split("").map((char, index) => {
      if ((index - 3) % 4 === 0) {
        return char.toUpperCase();
      }

      return char; 
    }).join("");

  return currWord; 
}

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');



/////////////////////
// 4
/////////////////////
// 1:46pm - 1:57pm. Took 11 minutes. 
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

/*
Input: array of integers. Unsorted order 
Output: array of two integers. The difference between these numbers is the smallest possible out of any two integers from the input array. 

Rules: 
In case of ties, just return one possible solution. 

Approach:
First, sort the array. If we do not want to mutate the array in any way, create a copy of the array and sort that copy. 
Iterate through. At each iteration, find the difference between the next num and the current num you are on. 
If difference is smaller than the currSmallestDif we have seen thus far, replace currSmallestDif with this difference, and keep track of the numbers used to make this difference. Call it `minNum` = [a. b]
Repeat process until reach end of sorted array. 
Return the numbers i.e., return `minNum`
*/

function closestNumbers(arr) {
  let sortedArr = arr.slice().sort((a, b) => a - b);
  
  let minDif = Infinity; 
  let minNum; 

  for (let ind = 0; ind < sortedArr.length - 1; ind += 1) {
    let currMin = sortedArr[ind + 1] - sortedArr[ind];
    if (currMin < minDif) {
      minDif = currMin; 
      minNum  = [sortedArr[ind + 1], sortedArr[ind]]
    }
  }

  return minNum; 
}

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

/////////////////////
// 5
/////////////////////
/*
12:37pm - 12:55pm. Took 18 minutes. 
input: string
output: string that is one character long. it represents the char that appears the least in the input string. 

rules: 
- case insensitive e.g., 'A' is equivalent to 'a' when counting
- we get the count of ALL characters. Not just the alphabetical ones. For example, the empty space char ' ' counts. 
- if there are multiple characters with the same lowest number of occurrences, take the one that appears first. 

Approach: 
let orderSeen = empty array. For each char we see, if the char has not been shown, add to orderSeen from the end. 

let charCount = collection to hold the count of each char we see. 

Convert to all lower case. 
Start counting from left to right of string. 
Say we are at index i. 
Get char[i]. 
Check if char[i] in orderSeen. If it isn't, add the character. 
Check if char[i] is in the charCount. If it isn't, add it with a count of 1. If it is, increment the count already there by one. 

At the end, get the char with the smallest counts. If multiple, look into orderSeen to see which char comes first. Return that one. 
*/

function leastCommonChar(str) {
  str = str.toLowerCase(); 
  let orderSeen = []; 
  let charCount = {}; 

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];

    if (!orderSeen.includes(char)) {
      orderSeen.push(char); 
    }

    charCount[char] = charCount[char] || 0; 
    charCount[char] += 1; 
  }

  let minOccurCount = Math.min(...Object.values(charCount)); 
  let minOccurChars = Object.entries(charCount).filter(nestedArr => nestedArr[1] === minOccurCount).map(nestedArr => nestedArr[0]); 

  for (let index = 0; index < orderSeen.length; index += 1) {
    if (minOccurChars.includes(orderSeen[index])) {
      return orderSeen[index]; 
    }
  }
}


// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

function duplicates(array){
  if (array.length <= 1) {
    return 0; 
  }
  
  let countOfChar = {}; 
  
  array.forEach(num => {
    countOfChar[num] = countOfChar[num] || 0; 
    countOfChar[num] += 1; 
  }); 
  
  let temp = Object.values(countOfChar).filter(count => count >= 2);
  
  let sum = 0; 
  temp.forEach(count => {
    sum += Math.floor(count / 2);
  }); 

  return sum; 
}

///////////////////////////////
// MORE PROBLEMS FROM CODEWARS
///////////////////////////////

// Repeated substrings
// https://www.codewars.com/kata/5491689aff74b9b292000334/train/javascript 
function f(s) {
  let lengths = s.length; 
  
  for (let len = 1; len <= lengths; len += 1) {
    let subStringsArray = getAllSubstrings(s, len);
    let numberToRepeat = (lengths / len); 
    
    if (numberToRepeat % 1 !== 0) {
      continue; 
    }
    
    for (let ind = 0; ind < subStringsArray.length; ind += 1) {
      if (subStringsArray[ind].repeat(numberToRepeat) === s) {
        return [subStringsArray[ind], numberToRepeat]
      }
    }
  }
}

function getAllSubstrings(s, len) {
  let arrOfSubstrings = []; 
  
  for (let ind = 0; ind < s.length - len + 1; ind += 1) {
    let subStr = s.slice(ind, ind + len);
    arrOfSubstrings.push(subStr);
  }
  
  return arrOfSubstrings;
}

/*
input: string 
output: array of two numbers: substring t, 
and k indicating the count of the substring t needed to form the 
entire input string. 

rules: 
- we want to minimize the substring t, and maximize the number k, 
such that the entire string s is equal to t repeated k times. 
- a "substring" can be the entire string itself, in which case 
you only repeat once. 

approach: 

have a helper function which gets all the substrings of length X, 
where you specify X. So the helper fcn takes in two inputs, the 
string and the length of the substring you are interested in. 

In main program, first obtain all substrings of length 1. 
See if any can satisfy the original string length s.length times. 
If not, repeat the process; obtain all substrings of length 2. 
See if any can form the string when repeated (s.length / 2) times. 
If any do, return that substring and the count. 

*/

// Scramblies
function scramble(str1, str2) {
  let str1Arr = str1.split('');
  for (let index = 0; index < str2.length; index += 1) {
    let char = str2[index];
    
    if (str1Arr.includes(char)) {
      let indexOfChar = str1Arr.indexOf(char);
      str1Arr.splice(indexOfChar, 1);
    } else {
      return false;
    }
  }
  
  return true; 
}

// Largest product in a series 
// https://www.codewars.com/kata/529872bdd0f550a06b00026e/train/javascript
function greatestProduct(input) {
  let currMax = -Infinity;
  for (let index = 0; index < input.length - 5 + 1; index += 1) {
    let currSubstr = input.slice(index, index + 5);
    let currProduct = productEachNum(currSubstr); 
    currMax = Math.max(currMax, currProduct); 
  }
  
  return currMax;
}

function productEachNum(currSubstr) {
  return currSubstr
    .split("")
    .map(num => Number(num))
    .reduce((acc, currNum) => acc * currNum, 1); 
}

// Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript
function findUniq2(arr) {
  let [first, second, third] = arr.slice(0, 3);

  if (!(first === second && second === third)) {
    if (first === second) {
      return third;
    } else if (second === third) {
      return first;
    } else {
      return second;
    }
  }
  
  let duplicate = first; 
  let strLength = arr.length; 
  let checkSum = duplicate * strLength; 
  let actualSum = arr.reduce((acc, currVal) => acc + currVal, 0);
  
  if (checkSum < actualSum) {
    return (actualSum - checkSum) + duplicate;
  } else {
    return duplicate - (checkSum - actualSum);
  }
}

function findUniq(arr) {
  let [first, second, third] = arr.slice(0, 3);

  if (!(first === second && second === third)) {
    if (first === second) {
      return third;
    } else if (second === third) {
      return first;
    } else {
      return second;
    }
  }
  
  let duplicate = first; 
  
  for (let i = 3; i < arr.length; i += 1) {
    if (arr[i] !== duplicate) {
      return arr[i];
    }
  }
}


/*
input: array of  numbers
output: number that is the unique one in the array. 

rules: 
- guaranteed the array contains at least 3 numbers. 

Approach 1: 
- base case for if the first three numbers
- if all three equal each other, know the number seen is the duplicate one
- if not, determine which is the unique number and return that number. 

assuming all the first three are equal, set the duplicate num = `duplicate`
iterate through remaining elements of array until you see the unique.
return the unique num. 

Approach 2 (faster/"clever" approach):
- base case for if the first three numbers
- if all three equal each other, know the number seen is the duplicate one
- if not, determine which is the unique number and return that number. 

set the duplicate num = `duplicate`
Determine the length of the array, `length` 
let checkSum = `duplicate` * `length`. 
Find the actual sum of the array i.e., `actualSum`. 
Find the difference between the two. Do some logic to determine 
what the unique number's value is. 

Go ahead with approach 2. 
Update: approach 2 won't work due to imprecision. Code up first method.

*/

  
// Sum of pairs (method timed out for you) 
// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
function sumPairs(ints, s) {
  let currIndices; 
  for (let firstNumIndex = 0; firstNumIndex < ints.length - 1; firstNumIndex += 1) {
    for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < ints.length; secondNumIndex += 1) {
      let currSum = ints[firstNumIndex] + ints[secondNumIndex]; 
      if (currSum === s) {
        currIndices = currIndices || [firstNumIndex, secondNumIndex]
        
        if (currIndices[1] >= secondNumIndex) {
          currIndices = [ints[firstNumIndex], ints[secondNumIndex]];
        }
      } 
    }
  }
  
  console.log(currIndices)
  return currIndices;
}


/* 
Input: 
1) Array of integers
2) a number representing the sum `s`

Output: an array of the indices of the first elements whose sum equals `s`

Rules:
- If there are multiple answers, return the first two values 
(from left to right) that add up to the sum. 
- If there are two or more pairs with the required sum, 
the pair whose second element has the smallest index is the solution.

*/

// Make weird case question
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/solutions/javascript?filter=me&sort=best_practice&invalids=false
function toWeirdCase(string){
  let stringArr = string.split(" ");
  
  stringArr.forEach((word, index) => { 
    word = makeWeird(word);
    stringArr[index] = word;
  });
  
  return stringArr.join(" ");
}

function makeWeird(word) {
  for (let index = 0; index < word.length; index += 1) {
    if (index % 2 === 0) {
      word = word.slice(0, index) + word[index].toUpperCase() + word.slice(index + 1);
    } else {
      word = word.slice(0, index) + word[index].toLowerCase() + word.slice(index + 1);
    }
  }
  
  return word;
}

/*
Input: string
Output: string, but in the weird case format 

Rules: 
- You must weird case EACH word. For each word, the first char will
be uppercased, the next char will be lowercased, the subsequent will
be uppercased again, and so on. 
- words are separated by one empty space
- you can assume that the input string will only consist of 
alphabetical characters and spaces. 

Approach: 
-write helper function to do the weird case for an input word
-Split string into array with the proper delimitor. 
-Mutate the array; for each element, put the weird case format 
word in it instead (using the helper function). 
-join the array together (string)
-return the string
*/

function fibonacci(n) {
  let currNums = [1, 1];

  for (let currInd = 3; currInd <= n; currInd += 1) {
    currNums = [currNums[1], currNums[0] + currNums[1]];
  }

  return currNums[1];
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))