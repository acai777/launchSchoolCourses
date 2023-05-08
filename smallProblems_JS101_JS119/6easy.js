// Double Char (Part 1)

function repeater(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    result += str[i].repeat(2);
  }

  return result;
}

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

// Double Char (Part 2)
function doubleConsonants(str) {
  let arr = str.split("");
  let result = [];
  arr.forEach(elt => {
    if (isConsonant(elt)) {
      result.push(elt, elt);
    } else {
      result.push(elt);
    }
  });

  return result.join(""); 
}

function isConsonant(elt) {
  elt = elt.toLowerCase() 
  if (elt >= 'a' && elt <= 'z') {
    if (!'aeiou'.includes(elt)) {
      return true; 
    }
  }

  return false;
}

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

// Reverse Number 
function reverseNumber(num) {
  return Number(String(num).split("").reverse().join(""));
}

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1

// Counting Up 
function sequence(upperLimNum) {
  let resultArr = [];

  for (let i = 1; i < upperLimNum + 1; i += 1) {
    resultArr.push(i);
  }

  return resultArr;
}

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// Name Swapping
function swapName(name) {
  return name.split(" ").reverse().join(", ");
}

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further exploration 
function swapNameMiddle(name) {
  let arr = name.split(" "); 
  let firstMidd = arr.slice(0, arr.length - 1).join(" ");
  let last = arr.slice(arr.length - 1);
  return last.concat(firstMidd).join(", ")
}

// console.log(swapNameMiddle('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"

// Sequence Count 
function sequence(count, num) {
  let resultArr = [];
  let startInd = count && 1; // take advantage of short-circuiting

  while (startInd >= 1 && startInd <= count) {
    resultArr.push(num);
    num += num; 
    startInd += 1;
  }

  return resultArr;
}

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

// Reverse It (Part 1)
function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// Reverse It (Part 2)
function reverseWords(str) {
  let resultArr = str.split(" ").map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }

    return word; 
  });

  return resultArr.join(" ");
}

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// Reversed Arrays 
function reverse(arr) {
  let leftPointer = 0; 
  let rightPointer = arr.length - 1; 
  let temp;

  while (leftPointer < rightPointer) {
    temp = arr[leftPointer]; 
    arr[leftPointer] = arr[rightPointer];
    arr[rightPointer] = temp;

    leftPointer += 1; 
    rightPointer -= 1; 
  }

  return arr; 
}

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

// Matching Parentheses? 
function isBalanced(str) {
  let arr = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      arr.push(str[i]);
    }

    if (str[i] === ')') {
      if (arr.length > 0) {
        arr.pop(); 
      } else {
        return false;
      }
    }
  }

  return (arr.length === 0);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);







