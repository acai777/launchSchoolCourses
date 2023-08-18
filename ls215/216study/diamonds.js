/*
10:50pm - 11:30pm Right on time. Hah. 

input: going to an odd integer. Will always be positive.
output: undefined. we want to LOG the diamond to the screen. want to use the newline indicator `\n` to indicate a new line

diamond(1) 
"*"

diamond(3) console.log(" *\n***\n *")
" *"
"***"
" *"

diamond(9) 
"    *" // 4 pads from left 
"   ***" // 3 pads from left
"  *****" // 2 pads from left
" *******" // 1 pad from left
"*********" // 0 pads 
" *******" // 1 pad from left
"  *****" // 2 pads from left
"   ***" // 3 pads from left
"    *" // 4 pads from left 


2 things to consider for each "row":
1) how much to pad from the left
2) how many "diamonds" to have in the row

1) how much to pad from the left
row 1 - pad Math.floor(n/2) times with empty space from left 
row 2 - pad Math.floor(n/2) -1 times with empty space from left 
row 3 - pad Math.floor(n/2) -2 times with empty space from left 
row 4 - pad Math.floor(n/2) -4 times with empty space from left 
.
.
. do until reach row Math.ceil(n/2)


==================================
2) how many "diamonds" to have in the row
keep track of asterisks for each row 
keep track of whether we are still "ascending" the diamond or in the "descending" portion
  - keep track of diamonds in current row. 
  - if ascending, in the next row, add two diamonds more than what you had in the previous row. Go up to row Math.ceil(n/2), inclusive. 
  - if descending, subtract two from previous row. 

diamond(9) 
row 1 - one diamond
row 2 - 3 diamonds
row 3 - 5 diamonds
... 
row X - n diamonds
row X + 1 - (n + 2) diamonds


Data structure: work with strings. do string manipulation to find out the amount to pad, and also the amount of diamonds we want

ALGORITHM
Split up into three parts: 
1) get first upper half of diamond
2) get bottom half of diamond
3) get middle row of diamond
4) concatenate every thing together, making sure that the newline indicator is correct and in place. 

- See if the input number `num` is 1. If so, log one diamond i.e., "*"
- Initialize a variable `numRowsHalf` to the number of rows in the first half. This will be Math.floor(n / 2);

-Loop. Iterate from 1 to `numRowsHalf`, inclusive
  -for each iteration, get the amount to pad from the left `amountToPad`. Use helper function `padLeft(rowNum, num)` 
  -for each iteration, also get the number of diamonds `numDiamonds` you would want. Use helper function `getNumberDiamonds(rowNum, num)`
  - concatenate `amountToPad` and `numDiamonds` and `\n` and store result in a string variable `currRowStr` 
  -push the row `currRow` to an array called `upperHalfArray` 

-Now, get the bottom half. Reverse `upperHalfArray` and save the result to a new array called  `bottomHalfArray`. 
  -For the last element in `bottomHalfArray`, remove the \n indicator. Can use string manipulation methods (e.g., slice) to do so. 

-Generate the number of diamonds in the middle row using `getNumberDiamonds(rowNum)`. Store in variable called `middleRow`

-Concatenate and join `upperHalfArray`, `middleRow`, and `bottomHalfArray`

diamond(1);
diamond(3);
*/

function diamond(num) {
  if (num === 1) return '*';

  let numRowsHalf = Math.floor(num / 2);
  let upperHalfArray = [];

  for (let rowNum = 1; rowNum <= numRowsHalf; rowNum +=1) {
    let amountToPad = padLeft(rowNum, num);
    let numDiamonds = getNumberDiamonds(rowNum);

    let currRow = amountToPad + numDiamonds + '\n';
    upperHalfArray.push(currRow);
  }


  let bottomHalfArray = upperHalfArray.slice().reverse(); 
  bottomHalfArray[bottomHalfArray.length - 1] = bottomHalfArray[bottomHalfArray.length - 1].replace("\n", "");

  let middleRow = getNumberDiamonds(Math.ceil(num / 2)) + `\n`;

  return upperHalfArray.join("") + middleRow + bottomHalfArray.join("");
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));
console.log(diamond(11));
console.log(diamond(13));




function padLeft(rowNum, num) {
  return ' '.repeat(Math.floor(num / 2) - (rowNum - 1));
}

function getNumberDiamonds(rowNum) {
  // 1, 3, 5, 7, 9
  let currRowDiamondCount = 1;
  for (let i = 2; i <= rowNum; i +=1) {
    currRowDiamondCount += 2; 
  }

  return '*'.repeat(currRowDiamondCount); 
}


// console.log(padLeft(1, 9).length);
// console.log(padLeft(2, 9).length);
// console.log(padLeft(3, 9).length);
// console.log(padLeft(4, 9).length);
// console.log(padLeft(5, 9).length);

// console.log(getNumberDiamonds(1))
// console.log(getNumberDiamonds(2))
// console.log(getNumberDiamonds(3))
// console.log(getNumberDiamonds(4))
// console.log(getNumberDiamonds(5))