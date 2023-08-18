/*
9:40pm - 10:05pm (how long it took you to solve on your own)

Input: string of numbers and potentially other, non-numeric strings
Output: boolean. if is a valid number, return true. invalid, return flase


Rules / things to keep in mind: 
- input might contain non-numeric characters. ignore the non-numeric characters. 
- want to apply the Luhn formula on the resulting numeric characters. 
  1) from R to L, double the value of every second digit. 
    -if the result of the doubled amount is >= 10, subtract 9 from the result
    -otherwise, just put the resulting number in place 
  2) once you've done the first step, now need to sum the numbers. result is `sum`
  3) Check if `sum` mod 10 is equal to 0. 
    - if it is, you have a value number. Return true. 
    - if it does not, you have an invalid number. Return false.


Questions: 
- can we have empty strings? Answer around 26:40minute mark: no, don't need to worry about that.


Function name: checkIfValid(str) 

checkIfValid('1111') -> false
checkIfValid('8763') -> true 
checkIfValid('') -> false  // unsure if this will happen
checkIfValid('1ab1-1jkj....1') -> false 
checkIfValid('    8aa ea  7---- 6 ....3     ') -> true
checkIfValid('133') -> true 


D/A
-Clean the string. Remove all non-numeric characters. Convert cleaned string into array, separated by empty space. Result is var `cleaned`
-Iteration: For var `cleaned`, want to iterate from right to left. 
  - Want to double every second digit. How? use a counter variable. `double` = true/false
    - For every doubled digit, heck resulting number. 
      - If number is >= 10, subtract 9. Use the difference as number.
      - Otherwise, just use the doubled number as the number used. 
-Sum: Once you've done the above iteration, then sum the resulting numbers together. 
-Check sum: if sum mod 10 is 0, return true. Otherwise, return false 
*/

function checkIfValid(str) {
  let cleanedArr = str.replace(/\D/g, '').split("").map(char => Number(char));

  let doubled = doubleProcess(cleanedArr); 

  let sum = doubled.reduce((acc, currVal) => acc + currVal, 0);

  return sum % 10 === 0;
}

function doubleProcess(arr) {

  let double = false; 
  let doubledArr = []; 

  for (let i = arr.length - 1; i >= 0; i-=1) {
    let num = arr[i]; 
    
    if (double === true) {
      num = num * 2;

      if (num >= 10) {
        num = num - 9;
      }
    }

    doubledArr.push(num); 
    double = !double; 
  }

  return doubledArr.reverse(); 
}

// checkIfValid('1ab1-1jkj....1')
// checkIfValid('    8aa ea  7---- 6 ....3     ') 

// doubleProcess([ '8', '7', '6', '3' ]);
// doubleProcess([ '2', '1', '2', '1' ]);

console.log(checkIfValid('1111')) // false
console.log(checkIfValid('8763')) // true
console.log(checkIfValid('1ab1-1jkj....1')) // false
console.log(checkIfValid('    8aa ea  7---- 6 ....3     ')) // true
console.log(checkIfValid('133')) // true 
console.log(checkIfValid("2323 2005 7766 3554")); // true

/*
What can you do better/ things you forgot to do while solving this problem yourself? 

-Make sure to go through the test cases after you write your algorithm and BEFORE you code. The LS staff seem to really want to see that, and it might even be something they check in the LS216 assessment. 

-I think your initial way of talking through the problem i.e., defining what the input/output is, writing down rules/things to remember, writing out test cases, and then writing out the algorithm makes a lot of sense. Generally speaking, I think that was OK. You did, however, forget to apply your algorithm with the test cases BEFORE coding. Remember to do that, even if for only a short period. 
  -You feel uneasy about the process, though, and I think that is normal; might just want to practice more to get more comfortable with the general steps

-Maybe some other things you could have done better with the initial steps above is to flesh out the questions and, relatedly, potential edge cases etc. For this problem, there weren't too many edge/weird cases I'd say. However, in general, be sure to account for those weird/edge cases. 

For strings, empty string. 
For numbers, weird number types e.g., Infinity, etc. 
For objects/arrays, be wary of empty objects/arrays. 

Remember what String.prototype.match() returns if there are no matches (value `null`!)

*/