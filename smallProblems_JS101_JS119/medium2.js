// Lettercase Percentage Ratio
/*
Input: str
Output: obj containing properties with info on the str

Rules:
-assume string always contains at least one character 
-seems like the values of the keys are percentages. 
-Two decimal points
-can have 0% of a certain type. In which case, is just 0.00
-three properties: lowercase, uppercase, and neither. 

DS
object to return 
array (to potentially get the percentages)

Algorithm
get counts of each type. 
divide by total, get percentages, rounded to two decimal place
*/

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

function letterPercentagesOwnAttempt(str) {
  let obj = {}; 
  let lowerCaseCount = 0;
  let uppercaseCount = 0; 
  let neitherCount = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (isLowerCase(str[i])) {
      lowerCaseCount += 1;
    } else if (isUpperCase(str[i])) {
      uppercaseCount += 1;
    } else {
      neitherCount += 1; 
    }
  }

  obj.lowercase = (100 * (lowerCaseCount / str.length)).toFixed(2); 
  obj.uppercase = (100 * (uppercaseCount / str.length)).toFixed(2); 
  obj.neither = (100 * (neitherCount / str.length)).toFixed(2); 

  return obj;
}


function letterPercentages(str) {
  let denominator = str.length; 
  let obj = {
    lowercase: (((str.match(/[a-z]/g) || []).length / denominator) * 100).toFixed(2),
    uppercase: (((str.match(/[A-Z]/g) || []).length / denominator) * 100).toFixed(2), 
    neither: (((str.match(/[^a-z]/gi) || []).length / denominator) * 100).toFixed(2),
  }

  return obj;

}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/* Triangle Sides 
input: three numbers, each representing a side of a hypothetical triangle
output: string, indicating the status of the hypothetical triangle

rules:
-a triangle is valid if: 
  1) the sum of the lengths of the two shortest sides must be greater than the length of the longest side
  2) all sides must be greater than length 0. 

- For valid triangles, they can be further classified:
  1) if all sides are of equal length, have an equilateral
  2) If two sides are of equal length, and the third is different, have an isosceles
  3) If all sides are of different length, then have scalene. 

DS
array 

General algorithm/though process:
1) First check if is invalid/valid. Can sort the numbers, check the smallest two and make sure is greater than longest side. Then do a quick check to make sure all lengths > 0.

2) Check if is equilateral. Easy; just compare all sides
3) Check if is scalene. Make sure all sides are of dif length
4) return isosceles if the above two are not satisfied.  

*/

function triangle(side1, side2, side3) {
  let arrOfSides = [side1, side2, side3].sort((a, b) => a - b); 

  // Check if is invalid first
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return 'invalid';
  }

  if (arrOfSides[0] + arrOfSides[1] <= arrOfSides[2]) {
    return 'invalid';
  }

  // Check what type of triangle we have
  if (arrOfSides[0] === arrOfSides[1] && arrOfSides[1] === arrOfSides[2]) {
    return 'equilateral';
  } else if (allUnique(side1, side2, side3)) {
      return 'scalene';
  } else {
    return 'isosceles';
  }
}

function allUnique(...elts) {
  let seen = []; 
  for (let i = 0; i < elts.length; i += 1) {
    if (seen.includes(elts[i])) {
      return false;
    }

    seen.push(elts[i]);
  }

  return true; 
}

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

// Tri-Angles 
const RIGHT_TRIANGLE_DEGREE = 90; 
function triangle(a1, a2, a3) {
  if (!isValidTriangle(a1, a2, a3)) {
    return 'invalid';
  }

  if ([a1, a2, a3].includes(RIGHT_TRIANGLE_DEGREE)) {
    return 'right';
  } else if ([a1, a2, a3].sort((a, b) => a - b)[2] < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function isValidTriangle(a1, a2, a3) {
  return (a1 + a2 + a3 === 180) && ([a1, a2, a3].sort((a, b) => a - b)[0] > 0); 
}

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"

// Unlucky Days 
// make date objects using the Date constructor. Put in year, month, and day. 
// call the getDay() method on the date object to get the day on the 13th.
// sources:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay

const MONTHS_IN_YEAR = 12;
const FRIDAY_13TH_CANDIDATE = 13;
const FRIDAY = 5; 
function fridayThe13ths(year) {
  let date; 
  let count = 0; 
  for (let i = 0; i < MONTHS_IN_YEAR; i += 1) {
    date = new Date(year, i, FRIDAY_13TH_CANDIDATE);
    if (date.getDay() === FRIDAY) {
      count += 1; 
    }
  }

  console.log(count); 
}

// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2


// Next Featured Number Higher than a Given Value 
function featuredOWN(num) {
  if (num >= 9876543201) {
    console.log("There is no possible number that fulfills those requirements.");
    return;
  }

  let currNum = num + 1; 

  while (true) {
    if (isFeature(currNum)) {
      console.log(currNum);
      return;
    } else {
      currNum += 1 
    }
  }
}

function isFeatureOWN(currNum) {

  // Check if is not odd and not multiple of 7
  if (currNum % 2 === 0 || currNum % 7 !== 0) {
    return false; 
  }

  // Check if is all unique
  let unique = String(currNum).split("").map(num => Number(num)).sort((a, b) => a - b);
  for (let i = 0;  i < unique.length - 1; i += 1) {
    if (unique[i] === unique[i + 1]) {
      return false; 
    }
  }

  return true; 
}

/*
input: `num`, an integer 
output: number that is next feature number after the input `num`, or error msg if no next featured number (extend over 9876543201)

rules: 
-odd number 
-multiple of 7 
-all digits occur only once 
*/

// Let's make a more efficient solution (aligned with solution key)
function featured(num) {
  const MAX_FEATURED = 9876543201; 
  let featuredNumCandidate = toOddMultipleOfSeven(num);

  do {
    if (allUnique(featuredNumCandidate)) {
      //console.log(featuredNumCandidate);
      return featuredNumCandidate; 
    } else {
      featuredNumCandidate += 14; 
    }
  } while (featuredNumCandidate < MAX_FEATURED);
}

function toOddMultipleOfSeven(num) {
  let currNum = num; 
  do {
   currNum += 1  
  } while (currNum % 2 === 0 || currNum % 7 !== 0);

  return currNum; 
}

function allUnique(currNum) {
  let unique = String(currNum).split("").map(num => Number(num)).sort((a, b) => a - b);
  for (let i = 0;  i < unique.length - 1; i += 1) {
    if (unique[i] === unique[i + 1]) {
      return false; 
    }
  }

  return true; 
}

// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."

// Sum Square - Square Sum
function sumSquareDifference(num) {
  let squareSum = squareofSum(num); 
  let sumSquare = sumOfSquare(num); 

  //console.log(squareSum - sumSquare);
  return squareSum - sumSquare;
}

function squareofSum(num) {
  let sum = 0; 
  for (let i = 1; i <= num; i += 1) {
    sum += i 
  }

  return sum**2; 
}

function sumOfSquare(num) {
  let sum = 0; 
  for (let i = 1; i <= num; i += 1) {
    sum += i**2; 
  }

  return sum; 
}

// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

// Bubble Sort 

function bubbleSort(arr) {
  let swap = false; 
  let temp;

  while (swap === false) {
    for (let i = 0; i < arr.length-1; i += 1) {
      if (arr[i] > arr[i+1]) {
        temp = arr[i]; 
        arr[i] = arr[i+1]; 
        arr[i+1] = temp;
        swap = true;
      }
    }

    if (swap === false) {
      return arr;
    } else {
      swap = false; 
    }
  }
}

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// Longest Sentence 
/*
Input: String type, containing text of sentences.
Output: String which gives info on how many words the longest sentence has. 

Rules:
-Sentences are separated by periods, exclamation points, or question marks.
-Words are any sequence of characters that are not spaces or sentence-ending characters (so .?!). In other words, `--` is a "word"!

Process/hint:
use split(), and use a RegEx for the separator. 

*/

function longestSentence(str) {
  let arr = str.split(/[.?!]/).slice(0);
  arr = arr.slice(0, arr.length - 1);
  //console.log(arr);

  let longest = 0; 

  arr.forEach(sentence => {
    if (longest < wordCount(sentence.trim())) {
      longest = wordCount(sentence.trim());
      test = sentence.split(" "); 
    }
  });

  console.log(`The longest sentence has ${longest} words.`);
}

function wordCount(sentence) {
  return sentence.split(" ").length;
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';
  
let sentences = longText.match(/\w.*?[.!?]/g);
console.log(sentences);