/*
348pm - 412pm (24min just on coming up with the algo, did not code. But I think you got it)
412-425 finished coding it up. Seems to work. 

Questions: 
- can we assume the array will always be given? What if it is not given? 
- can we assume we always get an array type? 
- Can we assume the array, if given, will only contain integers? 
- Do we need to worry about weird integer values, like Infinity, -Infinity, etc? 
- The numbers in the array do NOT necessarily need to be unique, right? So an input array like [3,2,1,1] would be valid? 
-How can the third largest not exist? When we have an array with less than 2 elements and/or if there are duplicates. E.g., [2, 1], [1, 2, 2], [4, 4]  

Qs you forgot to ask: 
- Can the array be empty? If so, what should I return?
- Can the array be sparse? If so, how should I handle the missing elements?
- Will the array ever contain negative numbers or 0? If so, how should I handle those?
- Will the array ever contain NaN? If so, how should I handle that? REMEMBER: NaN is technically a NUMBER type. 

Input: 
array of numbers. can potentially be empty, contain less than 3 elements. Can assume will always have an array, and no NaN, infinity, weird number elements of the array.

Output: number, representing the third maximum number

Rules: 
- Cannot sort the input array. 
- If no third max, return the maximum of the array 

thirdMax([3, 2, 1]); // 1
thirdMax([1, 2, 1]); // 2 // duplicate, so no third max, return max.
thirdMax([1, 2]); // 2 // less than three numbers, so no third max, so return max.
thirdMax([]); // 0 // just return 0 when no max. 
thirdMax([1, 2, 3]); // 1
thirdMax([1, 1, 2, 3]); // 1
thirdMax([4, 4, 3, 2, 1, 1]); // 2 

D/A/Process: 
Want third max.

-Guard clause: if input array is empty, return 0. Can account for the array having two digits or 1 in rest of algorithm. UPDATE: technically, don't need this guard clause either. Rest of algo can handle even the empty array case. 

Initialize the following:
let thirdLargest = -Infinity
let secondLargest = -Infinity
let largest = -Infinity

[3, 2, 1]
if (3 > largest) since 3 is larger, do...
  thirdLargest = secondLargest
  secondLargest = largest
  largest = 3
in that order. 

Else (if 3 < largest), check with the second largest. do same process
if (3 > secondlargest) since 3 is larger, do...
  thirdLargest = secondLargest
  secondLargest = 3
in that order. 

Else (if 3 < secondLargest), check with the third largest. do same process
if (3 > thirdLargest) since 3 is larger, do...
  thirdLargest = 3

Else: do nothing. Move on to next iteration, no changes needed 

At the end, check thirdLargest. If is not -infinity, return it. If it is still -infinity, return largest from the input array (as specified by directions)
*/

function thirdMax(numArr) {

  if (numArr.length === 0) return 0;

  let thirdLargest = -Infinity;
  let secondLargest = -Infinity; 
  let largest = -Infinity; 
  let seen = [];

  for (let i = 0; i < numArr.length; i +=1) {
    let num = numArr[i];

    if (seen.includes(num)) continue; 
    if (num > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest
      largest = num;
    } else if (num > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = num
    } else if (num > thirdLargest) {
      thirdLargest = num;
    } 

    seen.push(num)
    // console.log(largest, secondLargest, thirdLargest);

  }

  // console.log(largest, secondLargest, thirdLargest);
  if (thirdLargest === -Infinity) {
    return Math.max(...numArr);
  }

  return thirdLargest;
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2, 1])); // 2 // duplicate, so no third max, return max.
console.log(thirdMax([1, 2])); // 2 // less than three numbers, so no third max, so return max.
console.log(thirdMax([])); // 0 // just return 0 when no max. 
console.log(thirdMax([1, 2, 3])); // 1
console.log(thirdMax([1, 1, 2, 3])); // 1
console.log(thirdMax([4, 4, 3, 2, 1, 1])); // 2 
