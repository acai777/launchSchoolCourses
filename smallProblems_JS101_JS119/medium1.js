function rotateArray(val) {
  if (!Array.isArray(val)) {
    return undefined; 
  }

  if (val.length === 0) {
    return []; 
  }

  let copy = [...val.slice(1), ...val.slice(0,1)];

  console.log(copy); 
  return copy;
}

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined

// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

/* Rotation (Part 2)
input: two numbers, `number` and `count`. 
output: a number

Rules:
-Want to rotate the last `count` digits of the input `number`. "Rotate" means something particular here: for the last `count` digits, move only the first of the digits selected to the end of `number`. Shift the remaining digits to the left of the first of the digits, which should now be at the end of the number. 
-if `count` = 1, do not "move" anything in practice. 

Qs:
What about scenarios where `count` is greater than the length of `number`? 

DS:
Could use a collection/array of some sorts. 

Pseudo-Algorithm:
split number into an array separated by empty space. 
select the `count` to last element of the array. This is the number you want to shift to the end. 
delete from the array, then move to end. 
return the output from the array.

*/

function rotateRightmostDigits(number, count) {
  let arr = String(number).split("");
  if (count > arr.length || count === 1) {
    //console.log(number);
    return number;
  }

  let deleted = arr.splice(-count, 1); 
  arr.push(deleted); 

  //console.log(Number(arr.join("")));
  return Number(arr.join(""));
}

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

/* Rotation (Part 3)
input: a number
output: another number, maximally rotated

Rules:
-want a maximally rotated number. Is an iterative process 
-leading zeros get dropped. from one of the test cases, they seem to be maintained in consideration when deciding the next digit to do the rotation. 

DS: 
Don't need one, tbh

Algorithm:
-Can do either a recursive or iterative approach. Use iterative approach as that seems most relevant for this program/question. 

-Define current index to rotate as currIndex. Initialize currIndex = 0.
Call rotateRightmostDigits(number, len(number) - currIndex. Assign number to the return value. Incremenet currIndex by one. 
Next, set number = rotateRightmostDigits(number, len(number) - currIndex). 
Keep going until len(number) - currentIndex === 0. 

return the last number. 

8703529146
7035291468 
7352914680
7329146805
7321468059 
7321680594
7321605948
7321609485
7321609854
7321609845 <- what you want to return 
*/

function maxRotation(number) {
  let currIndex = 0;
  let length = String(number).length; 

  while (length - currIndex !== 1) {
    number = rotateRightmostDigits(number, length - currIndex);
    currIndex += 1; 
  }

  console.log(number);
  return number;

}

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

/* Stack Machine Interpretation
Input: a string of the commands of the stack and register based language
Output: dependent on the commands of the string, and whether we've been asked to PRINT. 


Explicit Rules: 
- Set of commands as outlined in problem description
- Seeing a number will place a value in the register
- When you push the n onto the stack, the register still has a value of n 
- the register's value is replaced through any any mathematical operators outline in problem description such as ADD, SUB, MULT, DIV, REMAINDER. 
- the remainder's value is also replaced by the POP operation.
- PRINT will print the register value
- DIV and REMAINDER operate like `/` and `%`, only we only want to retain the integer result.
- We can assume all arguments (the string of input) is VALID.
-initialize stack to be empty. register value to be 0. 

Implicit: 
- string is read from left to right. 

DS
use array to split up commands into separate elements

Algorithm
-skip this step for now


[3, 4, 5] 
n = 5 

PRINT => 5, prints n (register value)

ADD => 5 + 5 = 10, n = 10 
[3, 4]

PRINT => 10

POP 
[3], now n = 4 

PRINT => 4 

ADD => 3 + 4 = 7, n = 7 
[]

PRINT 7 
*/

function minilang(str) {
  let arr = str.split(" ");
  let stack = []; 
  let registerVal = 0; 


  arr.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(registerVal);
        break;
      case 'ADD':
        registerVal = stack.pop() + registerVal;
        break; 
      case 'SUB':
        registerVal = registerVal - stack.pop();
        break;
      case 'MULT':
        registerVal = registerVal * stack.pop();
        break; 
      case 'DIV':
        registerVal = Math.trunc(registerVal / stack.pop());
        break; 
      case 'REMAINDER':
        registerVal = registerVal % stack.pop();
        break;
      case 'POP':
        registerVal = stack.pop();
        break;
      case 'PRINT':
        console.log(registerVal);
        break;
      default:
        registerVal = Number(command);
        break;
    }
  });
}

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

/* Word to Digit 
input: string of text
output: string of text, where all occ of a number word is converted into its corresponding digit character. 

D: 
array to break apart the string
object to store the key val pairs, where key is a number word, val is the corresponding digit char
*/
const DIGITS = {
  'one': '1',
  'two': '2', 
  'three': '3', 
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7', 
  'eight': '8',
  'nine': '9',
};

function wordToDigit(str) {
  //let arr = str.split(" ");
  let regExp; 

  Object.keys(DIGITS).forEach(numWord => {
    regExp = RegExp(`\\s${numWord}\\s`, 'gi');
    str = str.replace(regExp, DIGITS[numWord]);
  });

  console.log(str);
  return str;
}

// need to escape the slash via this source and via LS too (in their explanation for this problem):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp 
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// // "Please call me at 5 5 5 1 2 3 4. Thanks."
// wordToDigit('The weight is done.');      // "The w8 is d1."

/* Fibonacci Number Location By Length 
input: BigInt integer (representing number of digits)
output: BigInt number index of first Fib number that has the inputted number of digits. 

Rules: 
-assume argument is always an integer greater than two. 
-use bigInt to deal with big numbers 
-remember, is 0-indexed. 

Process. 

Calculate each fibo number. 
Check the number of digits of the fibo number at this index. If is equal to the input string, return the index. 
*/

function findFibonacciIndexByLength(num) {
  let currDigit = 1n; 
  let currNum = 1n;
  while (currDigit < num) {
    currDigit = String(fibo(currNum)).length;
    currNum += 1n;
  }

  return currNum -1n;
}

function fiboProcedural(num) {
  if (num === 1n || num === 2n) {
    return 1n; 
  }

  let first = 1n; 
  let second = 1n; 
  let temp; 

  let currNum = 2n;

  while (currNum != num) {
    temp = second; 
    second = first + second; 
    first = temp; 

    currNum += 1n; 
  } 

  return second; 
}

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

function fibonacciRecursive(num) {
  if (num === 1 || num === 2) {
    return 1; 
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

let memo = {};
function fibonacciMemo(nth) {
  if (nth <= 2) {
    return 1; 
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth]
  }
}




