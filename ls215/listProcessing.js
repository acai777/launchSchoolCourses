// Sum of digits
function sum(num) {
  console.log(String(num)
          .split("")
          .map(elt => Number(elt))
          .reduce((sum, currVal) => sum + currVal));
}

// Multiply All Pairs
function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i +=1) {
    for (let j = 0; j < arr2.length; j +=1) {
      let product = arr1[i] * arr2[j];

      result.push(product);
    }
  }

  result.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(result);
  return result;
}

// Sum of Sums 
function sumOfSums(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i +=1) {
    let subsequence = arr.slice(0, i + 1);
    let currSum = subsequence.reduce((sum, currVal) => sum + currVal);

    result += currSum;
  }

  console.log(result); 
  return result;
}

// Leading substrings
function leadingSubstrings(str) {
  let result = str.split("")
      .map((_, index, arr) => arr.slice(0, index + 1)
        .reduce((acc, currChar) => acc + currChar, ''));

  //console.log(result);
  return result;
}

// All Substrings 
function substrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i +=1) {
    result.push(...leadingSubstrings(str.slice(i)))
  }

  // console.log(result);
  return result;
}

// Palindromic Substrings 
function palindromes(str) {

  let arrToCheck = substrings(str).filter(substr => substr.length !== 1);
  //console.log(arrToCheck.filter(substr => isPalindrome(substr)));
  // return arrToCheck.filter(substr => isPalindrome(substr));
  return arrToCheck.filter(isPalindrome); // don't need to do the callback `substr => isPalindrome(substr)`. Can just pass in the callback function `isPalindrome` instead. 
}

function isPalindrome(substr) {
  return substr === substr.split("").reverse().join("");
}

// Grocery List
function buyFruit(list) {
  let result = [];

  list.forEach(nestedArr => {
    let [fruit, quantity] = nestedArr; 
    result.push(...repeat(fruit, quantity));
  });

  // console.log(result);
  return result; 
}

function repeat(fruit, quantity) {
  let result = [];
  while (quantity != 0) {
    result.push(fruit);
    quantity -= 1;
  }

  return result;
}

// Inventory Item Transactions 
function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

// Inventory Item Availability 
function isItemAvailable(id, transactions) {
  let filtered = transactionsFor(id, transactions);

  let result = filtered.reduce((acc, currObj) => {
    if (currObj.movement === 'in') {
      return acc + currObj.quantity;
    } else {
      return acc - currObj.quantity
    }
  }, 0)

  if (result > 0) {
    return true;
  }

  return false
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


















