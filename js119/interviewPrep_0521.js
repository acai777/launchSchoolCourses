/*
Are they the same?

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that
checks whether the two arrays have the "same" elements, with the same
multiplicities (the multiplicity of a member is the number of times it appears).
"Same" means, here, that the elements in b are the elements in a squared,
regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the
square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square
of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not
returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be []
a or b might be null
If a or b are null, the problem doesn't make sense so return false.

*/

// console.log(comp([], null)); // false
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])); // false
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])); // true
// console.log(comp([2, 2, 3], [4, 9, 9])); // false
// console.log(comp([10000000, 100000000], [100000000000000, 10000000000000000])); // true


function comp(arr1, arr2) {
  if (isInvalid(arr1) || isInvalid(arr2)) {
    return false; 
  }

  let arr1Copy = arr1.slice(); 

  for (let ind = 0; ind < arr2.length; ind += 1) {
    let currNum = arr2[ind];
    while (currNum != 1 && currNum % 1 === 0) { // ensure is whole number and not = 1
      if (arr1Copy.includes(currNum)) {
        arr1Copy.splice(arr1Copy.indexOf(currNum), 1);
        break; 
      } else {
        currNum = currNum ** (1/2); 
      }
    }

    if (currNum == 1 || currNum % 1 !== 0) {
      return false; 
    }
  }

  return true; 
}

function isInvalid(arr) {
  return (arr === null || arr.length === 0);
}

/* PEDAC APPROACH
input: two arguments, may not necessarily always be arrays. Assume in most cases both inputs are arrays.
output: boolean indicating whether all elements in the second array are multiplicities in a, for at least one element. 

rules:
- if get either empty array or null, return false. 
- I think can assume everything is an integer in the arrays. Otherwise, taking the square root just would not make sense 
- I believe the correspondence is still 1-1 i.e., once you find something that matches, that element from a can't be reused for a different number. 

Approach: 
Iterate through the second array. 
Set currNum = the element at the position in question. 
While the number is a whole number and it is not equal to one, check to see if the number is in the first array. If it isnt, set currNum = currNum ** (1/2). If it is, remove the number from the first array, and break early.
  Repeat until you exit the loop. 

  Return false if exit for loop early.

Return true at the end (means everything passed). 
*/

function comp(arr1, arr2) {
  if (arr1 === null || arr2 === null) return false;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let idx = 0; idx < arr1.length; idx++) {
    if (arr2[idx] !== (arr1[idx] * arr1[idx])) {
      return false;
    }
  }

  return true;
}

//////////////////////////
//////////////////////////
//////////////////////////
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
  Problem
  -------
    Overview:
      // Write a function that takes one argument, an array of
      // integers. The function should return minimum sum of 5
      // consecutive numbers in the array. If the array contains
      // less than 5 elements, the function should return null.
    Input:
      - array
    Output:
      - integer or null for invalid input
    Rules:
      - if array contains less than 5 elements, function should return null

  Examples/Test Cases
  -------------------
    console.log(minimumSum([1, 2, 3, 4]) === null);
    console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
    console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
    console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
    console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

  Mental Model
  ------------
    1, 2, 3, 4, 5, -5 => => 9
    1, 2, 3, 4, 5, === 15
    2, 3, 4, 5, -5  === 9

  Data Structures
  ---------------
    No new array or object

  Algorithm
  ---------
    1. Guard clause: if array length is less than 5
      - Return null
    2. Start with minimumSum set to sum of first 5 elements in array
    3. Iterate through input array
      - Create currentSum set to sum of array elements from current
        iteration + 5
        - Add current index to sum
      - If currentSum is smaller than minimumSum
        - Reassign minimumSum to be currentSum
    4. Return minimumSum

  *** And finally, Code with intent... ***
*/

function minimumSum(arr) {
  if (arr.length < 5) return null;
  let savedMinSum = arr.slice(0, 5).reduce((sum, num) => sum + num, 0);
  for (let idx = 0; idx <= arr.length - 5; idx++) {
    let currentMinSum = arr.slice(idx, idx + 5).reduce((sum, num) => {
      return sum + num;
    }, 0);

    if (currentMinSum < savedMinSum) {
      savedMinSum = currentMinSum;
    }
  }
  return savedMinSum;
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

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

/////////////// 
/*
  There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
  customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
  n: a positive integer, the number of checkout tills.

output
  The function should return an integer, the total time required.

// Examples:

  queueTime([5,3,4], 1)
  // should return 12
  // because when there is 1 till, the total time is just the sum of the times

  queueTime([10,2,3,3], 2)
  // should return 10
  // because here n=2 and the 2nd, 3rd, and 4th people in the 
  // queue finish before the 1st person has finished.

  queueTime([2,3,10], 2)
  // should return 12

Clarifications
  There is only ONE queue serving many tills, and
  The order of the queue NEVER changes, and
  The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
  N.B. You should assume that all the test input will be valid, as specified above.
*/

/*
input: two elements. 
  -the first is an array of integers representing the customers and their time to checkout 
  -the second element represents the number of checkout machines/tills 
output: an integer, representing the total time required for all customers to check out 

rules: 
- order matters here. So first customer in array gets to go first. 
- every input you can assume will be valid. 

approach: 
queueTime([10,2,3,3], 2)
let totalTime = 0; 

let till1 = arr[0]
let till2 = arr[1]

totalTime += min(till1, till2); 
till2 = arr[3].

min(till1, till2) = 0 

return totalTime; 

while true, break condition (min(till1, till2) = 0)
*/

function queueTime(arr, num) {
  let arrCopy = arr.slice(); 
  let totalTime = 0; 

  let currCustomersInTills = arr.slice(0, num);
  // console.log(currCustomersInTills);

  while (true) {
    let minCustomerTime = Math.min(currCustomersInTills); 
    totalTime += minCustomerTime; 
    currCustomersInTills.splice(currCustomersInTills.indexOf(minCustomerTime), 1); 
    currCustomersInTills.map((elt) => elt - minCustomerTime); 
    
  }
}

function queueTime(customers, tillNum) {
  if (tillNum === 1) return customers.reduce((sum, num) => sum + num, 0);

  let tillArr = [];
  for (let idx = 0; idx < tillNum; idx++) {
    tillArr.push(0); // [0, 0, 0, 0, 0]
  }

  for (let idx = 0; idx < customers.length; idx++) {
    let index = tillArr.indexOf(Math.min(...tillArr));
    tillArr[index] += customers[idx];
  }

  return Math.max(...tillArr);
}

queueTime([10,2,3,3], 3)

// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

