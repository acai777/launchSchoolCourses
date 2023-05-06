/*
Dedicate this file right now for the JS 110 course. Just practice code here
 */

{
// function substrings(str) {
//   let result = [];
//   let startingIndex = 0;

//   while (startingIndex < str.length - 1) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       let substring = str.slice(startingIndex, startingIndex + numChars);
//       result.push(substring);
//       numChars += 1;
//     }
//     startingIndex += 1;
//   }
//   return result;
// }

// /*
// Do each iteration by yourself to double check the logic. 
// 'halo' = ['ha', 'hal, 'halo', 'al', 'alo', 'lo'] 
// */
// console.log(substrings('halo'));

// function substrings2(str) {
//   let result = [];
//   for (let i = 0; i < str.length - 1; i += 1) {
//     for (let j = i+1; j < str.length; j += 1) {
//       let substring = str.slice(i, j+1); 
//       result.push(substring);
//     }
//   }

//   return result;
// }

// console.log(substrings2('halo'));

// function consecEvenRowSum(inputRow) {
//   // edge case: row 1 
//   if (inputRow === 1) {
//     return 2;
//   }

//   let rowStartInt = 2;
//   let rowEndInt = 2; 
//   let currRow = 1; 
//   while (currRow !== inputRow) {
//     currRow += 1; 
//     rowStartInt = rowEndInt + 2; 
//     rowEndInt = rowEndInt + 2*currRow; 
//   }

//   let sum = 0; 
//   let currNum = rowStartInt; 
  
//   while (currNum <= rowEndInt) {
//     sum += currNum;
//     currNum = currNum + 2; 
//   }

//   console.log(rowStartInt);
//   console.log(rowEndInt);
//   console.log(sum); 

// }

// let inputRow = 5; 
// consecEvenRowSum(inputRow);

/*
2 = 2
4 6 = 10
8 10 12 = 30
14 16 18 20 = 68
22 24 26 28 30 = 130
*/


/*
Explicit Rules

- Structures are built with blocks
  - Blocks are cubes
  - Cubes are six-sided, have square faces, and have equal lengths on all sides
- The top layer in the structure consists of a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- Layers are solid structures -- there are no gaps between blocks in a layer

1. Start with:
  - A count of the 'number of blocks remaining' equal to the input
  - A count of the 'current layer' equal to 0
2. Calculate the number for the 'next layer' by adding 1 to the value for the 'current layer'
3. Using the number for the 'next layer', calculate the 'number of blocks required' to build that layer, by multiplying the number by itself
4. Determine if the 'number of blocks remaining' is greater than or equal to the 'number of blocks required' to build the layer
  - If it is:
    - Subtract the 'number of blocks required' from the 'number of blocks remaining'
    - Increment the 'current layer' by 1
    - Go back to Step 2
  - If it isn't:
    - Return the 'number of blocks remaining'


YOUR OWN ATTEMPT AGAIN
1. Start with a count of the 'number of remaining blocks' equal to the input
2. Also have a count of the layer you are on 'current layer'. Start with layer 0. 
3. Begin calculating the number for the next layer 'next layer'. 
  'next layer' will be equal to 'current layer' + 1
4. Calculate the 'number of blocks required' for the next layer by doing 'next layer' times itself. 
5. Determine if the 'number of blocks required' is less than or equal to the 'number of remaining blocks'
  -If it is:
    - Subtract 'number of blocks required' from 'number of remaining blocks'
    - change the 'current layer' to 'current layer' + 1 
    - Repeat and go to step 3 
  -If it isn't:
    - return 'number of remaining blocks'

*/

// function calculateLeftoverBlocks(inputBlocks) {
//   let numberRemainingBlocks = inputBlocks; 
//   let currentLayerNumber = 0; 

//   while (true) {
//     currentLayerNumber += 1;
//     let numberCubesNeededForNextLayer = currentLayerNumber*currentLayerNumber; 
//     if (numberRemainingBlocks >= numberCubesNeededForNextLayer) {
//       numberRemainingBlocks = numberRemainingBlocks - numberCubesNeededForNextLayer;
//     } else {
//       return numberRemainingBlocks;
//     }
//   }
// }

// console.log(calculateLeftoverBlocks(0) === 0); //true
// console.log(calculateLeftoverBlocks(1) === 0); //true
// console.log(calculateLeftoverBlocks(2) === 1); //true
// console.log(calculateLeftoverBlocks(4) === 3); //true
// console.log(calculateLeftoverBlocks(5) === 0); //true
// console.log(calculateLeftoverBlocks(6) === 1); //true
// console.log(calculateLeftoverBlocks(14) === 0); //true

}

/**
////////////////////////////////////////////////
Sort Strings by Most Adjacent Consonants 
////////////////////////////////////////////////

////////
PROBLEM
///////
Input: array of strings
Output: new array where strings are sorted by highest number of adjacent consonants in each string

Explicit rules: 
-Sort according to highest number of adjacent consonants each string contains
-If two strings contain same highest # of adjacent consonants, should retain original order in relation to each other 
-To be considered adjacent, the consonants must either:
  -be next to each other if in same word
  -separated by only one space if the consonants are in adjacent words. 

Questions:
1) What are considered consonants?
2) Can any other space besides an empty space be used in between adjacent consonants in adjacent words?
3) Can I assume that the input array will be nonempty? 
4) Related to (2), can I assume alphanumeric characters? Or can there be other characters? 
5) Are we case-insensitive? Are upper and lower case letters treated equivalently?
----- FORGOT TO ASK: sort in what order? Ascending or descending?

Implicit rules: 
1) Strings can contain multiple words. Implied through question condition regarding empty space between adjacent consonants of adjacent words.

////////
EXAMPLE
///////
Given test cases:                     0      0       2       3    
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']

                                                                                          3            2          2        0
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
                                       
                                       0      0       0     0
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']

                                       0       0        3       0              3       0      0       0
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

New (and old) implicit rules:
1) sort in DESCENDING order. That is, first string in new array must have highest number of consonants, etc.
2) Strings can contain multiple words. Can also just contain one word
3) seem to only deal with lower case, and only alphabetic characters (ask to confirm)
--DID NOT CATCH THIS: having just ONE consonant is equivalent to having zero adjacent consonants. Look at order of 'aa' and 'baa' in first test case.

////////////////
DATA STRUCTURE
////////////////
Dictionary/object or array to keep track of the string, and the highest number of adjacent consonants associated with it. 
Might want an array, because can retain original order of strings (useful for ties in # highest adj consonants).
Index refers to index of string in original input array
Value at the index is going to be the highest number of adjacent consonants. 

////////////////
ALGORITHM
////////////////
High level approach:
1) Keep track of index of string, and the associated highest # adj consonants with that string. 
  -write helper function to determine highest number of adj consonants 
2) Make a new empty. Initialize it to be empty first. 
3) In the sorting process, keep track of the numbers for highest number of adj consonants. 
4)Find the highest numbre of highest number of adj consonants, find that word and add to beginning of new array. 
  -Want to search original string from LEFT to RIGHT to preserve order in case of ties.
  -Next, can delete that count from the list of numbers for highest number of adj consonants, or just somehow know the next highest number
  -Repeat from beginning of step four until you have accounted for all strings.
5) Return new array

More specific/thorough (but still no implementation) approach:
1) Make new array called 'counttHighestNumAdjCons'
2) Make helper function countMaxAdjacentConsonants(string). 
   Starting from the first string of the input array 'input', find the highest number of adj consonants 'highestNum'
    -Add 'highestNum' to 'counttHighestNumAdjCons'. The index will correspond to index of the string in the input array 'input'
3) Initialize a new empty array called 'sorted'. This will be the return object. 
4) Sorting process:
  - Create a shallow copy of 'counttHighestNumAdjCons' and call it 'frequencyOfHighestNumConsontants'. This will be used to keep track of highest number of consonants. 
  - Sort this shallow copy. Make helper function sortIntArr(arr) to sort 'frequencyOfHighestNumConsontants'. Sort in ascending order. 
    Now...
    a) Find the highest number of highest # of adjacent consonants within 'frequencyOfHighestNumConsontants'. This is the last element. 
    b) Iterate through 'counttHighestNumAdjCons' from left to right until you find that count. Insert this string value into the array 'sorted' 
    c) Delete the highest number of highest # of adjacent consonants within 'frequencyOfHighestNumConsontants'. 
    d) REPEAT steps a-d until 'frequencyOfHighestNumConsontants' is empty, or you know you've accounted for all strings.
5) Return new array 'sorted'

////////////////
countMaxAdjacentConsonants(string)
input: string
output: number indicating highest number of adjacent consonants within word

Algorithm: 
1) initialize variable called highestNum to zero. This is the return value
2) initialize a variable called currentNum = 0. This is used to keep track of current number of adjacent consonants seen as you iterate the string from left to right.
4) Get rid of white space in the input string (assume only have max of one possible white space between words, if multiple words)
3) (assuming only have alphabetic characters), iterate the revised string from left to right. 
  -once you see first consonant... 
    a) add 1 to currentNum. 
    b) move to next character. 
      - if the next character is a consonant, add 1 to curretNum, and repeat from step (b)
      - if the next character is an empty space, repeat from step (b)
      - if the next character is a vowel, break. 
    c) Compare currentNum with with highestNum. Set highestNum to be the max of the two. 
    d) reset currentNum to be 0 again. restart step (3) from where you left off in the string.
  You continue step 3 until you've iterated through the entire string.
4) If highestNum = 1, return 0. Otherwise, return highestNum. 
////////////////

////////////////
sortIntArr(arr)
input: array of integers
output: new array of integers from input array, sorted in ascending order.

Won't make algorithm write - up. Seems straightforward. 
////////////////

 */

// Helper function 
function countMaxAdjacentConsonants(str) {
  let vowelsAndSpace = ['a', 'e', 'i', 'o', 'u'];
  str = str.split(" ").join("");
  let highestNum = 0; 
  let currentNum = 0; 

  for (let i = 0; i < str.length; i += 1) {
    if (!vowelsAndSpace.includes(str[i])) {
      while (i < str.length && !vowelsAndSpace.includes(str[i])) {
        currentNum += 1; 
        i += 1; 
      }

      if (currentNum > highestNum) {
        highestNum = currentNum; 
      }

      currentNum = 0; 
    }
  }

  if (highestNum === 1) {
    return 0;
  } else {
    return highestNum;
  }
}

// Main function
function sortStringsByConsonants(arr) {
  let counttHighestNumAdjCons = []; 
  for (let i = 0; i < arr.length; i += 1) {
    counttHighestNumAdjCons[i] = countMaxAdjacentConsonants(arr[i]);
  }

  let sorted = []; 
  let frequency = counttHighestNumAdjCons.slice().sort((a, b) => a - b);
  let currentHighest;
  while (frequency.length !== 0) {
    currentHighest = frequency.pop(); 
    for (let j = 0; j < counttHighestNumAdjCons.length; j += 1) {
      if (counttHighestNumAdjCons[j] === currentHighest) {
        sorted.push(arr[j]);
        arr.splice(j, 1); // mutates original array... not sure if we can given the OK to do that....
        counttHighestNumAdjCons.splice(j, 1);
        break;
      }
    }
  }

  return sorted;
}

// console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
// console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
// console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
// console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

/*
REFLECTION: your process is correct and works. However, should've just used the built-in array sort method with countMaxAdjacentConsonants as the compare Function. You did not use the sort method initially because you weren't sure how it worked with ties (given the question conditions regarding ties). However, you've learned that, with ties, the left most element of the array will start first. That corresponds very nicely and consistently with the requirements in this particular problem. 

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort for more detail.
 */



// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// function selectFruit(obj) {
//   let newObj = {}
//   for (let key in obj) {
//     if (obj[key] === 'Fruit') {
//       newObj[key] = 'Fruit';
//     }
//   }

//   console.log(newObj);
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

function doubleNumbers(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i] * 2;
  }

  return arr;
}


function doubleOddIndices(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 1) {
      arr[i] = 2 * arr[i];
    }
  }

  return arr; 
}


function multiplyArr(arr, number = 2) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i] * number);
  }
  
  return newArr; 
}

// [1, 2, 3].forEach((number, idx) => {
//   console.log(`${idx}: ${number}`);
// });

let transformedArr = [1,2,3].map(num => {
  let newNum = num*10; 
  if (newNum === 10) {
    return newNum;
  }

  return num;
})


// console.log(transformedArr);


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"]; 
let newObj = {};

flintstones.forEach((name, index) => newObj[name] = index);
// console.log(newObj)

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// let sumAge = 0;
// //Object.keys(ages).forEach(person => sumAge += ages[person]);
// Object.values(ages).forEach(num => sumAge += num); 
// console.log(sumAge);

// get minimum age from the family 
let minAge = Math.min(...Object.values(ages));
// console.log(minAge);

let statement = "The Flintstones Rock";
let frequencyObj = {}

statement.split(' ').join('').split('').forEach(char => {
  if (!frequencyObj.hasOwnProperty(char)) {
    frequencyObj[char] = 0;
  }

  frequencyObj[char] = frequencyObj[char] + 1;

});

// console.log(frequencyObj);



// for (let i = 1; i < 2; i += 1) {
//   console.log(i);
// }

// let arr = [1,2,3,4,5,6];
// arr.forEach(num => {
//   if (num === 5) {
//     break
//   }; 
//   console.log(num);
// })

//let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(elem => console.log(elem)); // 1, 2, 3, 4, 5, 6, 7
// arr.forEach(elem => {
//   if (elem < 3) {
//     arr.push(100);
//   }
//   console.log(elem);
// }); //1, 2, 3, 4, 5, 6, 7
// console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(() => 1));











