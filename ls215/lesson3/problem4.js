/*
2:30pm - 4pm Solved it, but took a while. Dang. What a tough problem! 
A lot going on. 

Input: string
Output: string of those numbers? or in array form? 

Rules:
- various possible short hand range notations, due to various possible separators... 
- The dash `-` seems to indicate a range. Actually, all three indicate a range, even though we do not see an example with the `..` separator. 
- Only the significant part of the next number is written. This is because we are told that the numbes are always increasing. Huh. 
- Range limits are always inclusive.


Examples:
=================================================
"1, 3, 7, 2, 4, 1" -> 1, 3, 7, 12, 14, 21
Must separate by `, ` here. 
max: 7
max: 12
max: 14

Looks like keeping track of max at every iteration is important. 

=================================================
"1-3, 1-2" -> 1, 2, 3, 11, 12

Must separate by `, ` here. Then have ['1-3', '1-2']
For each element e.g., '1-3', can then check to see if has separators. 

'1-3'.split(/([-:]|\.\.)/) becomes ['1', '3']. Know is a range, Can use as a range from 1 to 3. Compare with current max every time.

'1-2'.split(/([-:]|\.\.)/) becomes ['1', '2']. Know is a range, Can use as a range from 1 to 2. Compare with current max every time.

if (Number('1') < max), then append 1 to the front and keep going until is otherwise. 
if (Number('1') > max), then just append the number '1', AND be sure to change the max to be Number('1')

max: -infinity 
max: 1
max: 2
max: 3 
max: 11
max: 12
=================================================
"1:5:2" -> 1,2,3,4,5,6,7,8,9,10,11,12

["1:5:2"] -> ['1', '5', '2'] -> ['1', '5', '12'] -> pick first and last element to use for range i.e., 1 through 12. Apply same check of going through and finding the actual representation of the next biggest number. 

max = -Infinity 
=================================================

"104-2" -> ["104-2"] -> ["104", "2"] -> ["104", "2"]
since only two elements, go through, find actual represenation of the next biggest number. 

maximum = 104 
2 => 12 => 22 => 32 => ... => 102 => 112
=================================================

"104-02" -> "104-02" ["104-02"] => ["104", "202"]

max = -Infinity 
max = 104 

02 => 102 => 202
=================================================

"545, 64:11" -> ["545", "64:11"]

"545".split(/([-:]|\.\.)/) ---> ['545'] one element. If is only one element, just compare with current max. If is a range, must do a separate subprocess. Will demonstrate here. 

"64:11".split(/([\-:]|\.\.)/) does NOT work
"64:11".split(/-|\.\.|:/) WORKS though.... Huh. what is wrong with the parentheses?

"64:11".split(/-|\.\.|:/) => ["64", "11"]. Length is not one, so know is a range. Find max of the range here. => ["564", "611"]

64 -> 164 -> 264 -> ... -> 564 
11 -> 111 -> 211 -> ... -> 611

max = -Infinity 
max = 545 
max = 564

545 -> 545 

subprocess function should be called `getActualNumRepresentation`


=================================================
Important components to remember: 
-Need to be able to parse initial string into array of elements. The elements can be either numbers, or ranges as denoted by the possible separators: ["-", ":", ".."]. 
-once parsed, have a variable that keeps track of the maximum thus far. 

Questions: 
- Should I always pick the smallest possible next biggest number? Assume yes.


Algorithm: 
-Initialize empty container `result` to contain the resulting range. 
-for initial input string, clean it up
  - split by `, `. Then, split by .split(/-|\.\.|:/) for EACH element. So have nested array i.e., array of arrays. For example, "1, 3, 7, 2, 4, 1"  => ["1", "3", "7", "2", "4", "1" ] => [["1"], ["3"], ["7"], ["2"], ["4"], ["1"] ]
- Initialize a var called `currMax` to keep track of current maximum. Set initially to -Infinity to start. 

Now, iterate through this nested array from left to right. 
  -for each nested array, first check length. If length is 1, use `getActualNumRepresentation` to get the actual number representation
    -basically, `getActualNumRepresentation(num, currMax)` will compare the current number in question with `currMax`. Get the next valid number. 
    -once you have the actual representation, push onto `result`. 
    -be sure to change `currMax` if applicable. 
  
  -If nested array's length is, instead, > 1, apply `getActualNumRepresentation` to each number within the nested array. In the end, use the first element and the last element in the array as the start and end range, inclusive. Push the entire range onto `result`. 
*/

function getCompleteList(numStr) {
  let result = [];
  let cleanedArr = numStr.split(', ').map(elt => elt.split(/-|\.\.|:/)); 
  //console.log(cleanedArr);
  let currMax = -Infinity; 

  cleanedArr.forEach(nestedArr => {
    if (nestedArr.length === 1) {
      let fullNumber = getActualNumRepresentation(+nestedArr[0]);
      result.push(fullNumber); 
    } else {
      let cleanedNestedArry = nestedArr.map(num => {
        return getActualNumRepresentation(num);
      });
      //console.log(cleanedNestedArry);

      let startNum = +cleanedNestedArry[0];
      let endNum = +cleanedNestedArry[cleanedNestedArry.length - 1];

      let fullNumbersArr = getRangeofNumbers(startNum, endNum);

      result.push(...fullNumbersArr); 
    }
  });

  console.log(result);

  function getActualNumRepresentation(num) {
    let currTry = 1;
    while (+num <= currMax) {
      let attempt = Number(String(currTry) + String(num)); 

      if (attempt > currMax) {
        num = attempt; 
        break;
      }
      currTry += 1; 
    }

    currMax = num;
    return num; 
  }
}

function getRangeofNumbers(startNum, endNum) {
  let result = [];
  for (let i = startNum; i <= endNum; i +=1) {
    result.push(i);
  }

  return result;
}



// getCompleteList("1, 3, 7, 2, 4, 1");
// getCompleteList("1-3, 1-2");
// getCompleteList("1:5:2");
// getCompleteList("104-2");
// getCompleteList("104-02");
// getCompleteList("545, 64:11");


/*
Self-reflections:

- I think you did pretty well/OK overall. Spent 90min on this problem. First time seeing it. Struggled a bit with the String.prototype.split() method and understanding how to handles capture groups. Bleah. But if not for that, could have maybe saved a lot of time, at least ~20minutes or so. 

- Near the end, you started doing a little bit of hack and slash. This was because you had "finished" your function and tested it against the test cases. You then saw some issues, and then went back to fix. While you eventually got the correct solution (it works and is correct), this hack and slash marathon could have been preventable if you invested more time into your algorithm. I think, for this multi-layered of a problem (where there many moving pieces), you should definitely flesh out the algorithm steps more. You usually just try to remember key pieces for most problems, but for this problem, it wasn't as feasible to do so (remember in your noggin) because there are many moving pieces. It was harder to keep track and, thus, led to more preventable bugs/errors. 

- You got burned by trying to work with String.prototype.split() and a regular expression pattern. Internalize what you've learned about capture groups. 


*/