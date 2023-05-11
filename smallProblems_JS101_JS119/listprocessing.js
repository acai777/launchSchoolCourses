// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.
function sum(num) {
  let result = String(num)
    .split("")
    .map(num => Number(num))
    .reduce((acc, currVal) => currVal + acc, 0);
  //console.log(result);
  return sum; 
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:
const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(numArr) {
  numArr.sort((a, b) => {
    if (NUMBERS[a] > NUMBERS[b]) {
      return 1;
    } else if (NUMBERS[a] < NUMBERS[b]) {
      return -1;
    } else {
      return 0;
    }
  });

  //console.log(numArr);
  return numArr;
}

function alphabeticNumberSortDifCallBackFcnWriteUp(numArr) {
  numArr.sort(function wordSort(num1, num2) {
  if (NUMBERS[num1] > NUMBERS[num2]) {
    return 1;
  } else if (NUMBERS[num1] < NUMBERS[num2]) {
    return -1;
  } else {
    return 0;
  }
});

  //console.log(numArr);
  return numArr;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.
// You may assume that neither argument will be an empty array.
function multiplyAllPairs(arr1, arr2) {
  let resultArr = [];

  arr1.forEach(elt1 => {
    arr2.forEach(elt2 => {
      resultArr.push(elt1 * elt2);
    });
  });

  resultArr.sort((a, b) => a - b);
  //console.log(resultArr);
  return resultArr;
}

function multiplyAllPairsLessFancyVersion(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      resultArr.push( arr1[i] * arr2[j])
    }
  }

  resultArr.sort((a, b) => a - b);
  //console.log(resultArr);
  return resultArr;
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
multiplyAllPairsLessFancyVersion([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

function leadingSubstringsForEach(str) {
  let currStr = ''; 
  let newArr = [];

  str.split("").forEach(char => {
    newArr.push(currStr += char);
  });

  console.log(newArr);
  return newArr;
}

function leadingSubstringsMap(str) {
  let newArr = 
    str.split("").map((_char, index) => {
      return str.slice(0, index + 1);
    });

  console.log(newArr);
  return newArr;
}

function leadingSubstrings(str) {
  let currRes = ''
  let newArr = 
    str.split("").reduce((acc, currChar) => {
//    return acc.push(currRes += currChar); think about why this does not work. What is the return value of push? 
      acc.push(currRes += currChar);
      return acc;
    }, [ ]);

  //console.log(newArr);
  return newArr;
}

// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.
// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:
function substrings(str) {
  let resArr = [];
  for (let i = 0; i < str.length; i += 1) {
    resArr.push(...leadingSubstrings(str.slice(i)));
  }

  //console.log(resArr);
  return resArr;
}

substrings('abcde');

/*
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
*/
function palindromes(str) {
  let substrArr = substrings(str).filter(substr => substr.length > 1); 
  let resArr = [];

  substrArr.forEach(substr => {
    if (isPalindrome(substr)) {
      resArr.push(substr);
    }
  });

  //console.log(resArr);
  return resArr;
}

function isPalindrome(str) {
  let leftPointer = 0; 
  let rightPointer = str.length - 1; 

  while (leftPointer <= rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false;
    }

    leftPointer += 1;
    rightPointer -= 1;
  }

  return true; 
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number. 
function sumOfSums(arr) {
  let currSum = 0 
  let sumsArr = arr.map(num => {
    currSum += num;
    return currSum; 
  }); 

  let sum = sumsArr.reduce((acc, currSum) => {
    return acc + currSum; 
  }, 0);

  //console.log(sum); 
  return sum; 
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

/*
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.
*/

function buyFruit(nestedArr) {
  let result = [];

  nestedArr.forEach(subArr => {
    let item = subArr[0]; 
    let count = subArr[1];

    while (count !== 0) {
      result.push(item);
      count -= 1;
    }
  });

  //console.log(result);
  return result;
} 
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item. 

function transactionsFor(id, transactions) {
  //console.log(transactions.filter(obj => obj["id"] === id));
  return transactions.filter(obj => obj["id"] === id); 
}
let transactions1 = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

transactionsFor(101, transactions1);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/*
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.
*/

function isItemAvailable(id, transactions) {
    let currItemObj = transactionsFor(id, transactions); 

    let amount = currItemObj.reduce((acc, currObj) => {
      if (currObj["movement"] === 'in') {
        return acc + currObj["quantity"];
      } else {
        return acc - currObj["quantity"];
      }
    }, 0);

    //console.log(amount > 0); 
    return amount > 0; 
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true







