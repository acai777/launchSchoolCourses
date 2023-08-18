/*
6:54pm - 730pm Finished from start to end, including this section with the questions. Good job! 

Questions to ask:
-Can we assume input is going to be an array? 
  -If it isn't, how do we handle those cases? 
-Can we assume each element of the outer array will be an array itself? 
  -If not, how do we handle those cases?
-For the inputs to the nested arrays, can we assume we will only obtain numbers and number strings? 
  -if the nested arrays can take other types, how do we handle those types? boolean? array/objects? Do we duplicate those arrays/objects if they are different objects but have the same inner content? 
-Can a nested array be empty? 
  -If it can be, should we just skip over such arrays?
-The directions say "keep the one that come first in the result". From the one example, it seems like that means from left to right. Is that correct to assume? 
-With non-number strings, are we case sensitive? 

Important questions you missed 
-Can the sub-arrays contain NaN values? If so, do I have to remove duplicate NaNs? Remember, NaN is considered a Number type. 
-Can the array be sparse? If so, how should I handle the missing elements?
-Can the array contain any number of subarrays? (good question... I think)

TBH, you got most of the questions. Good job! 

PROCESS 
=====================
Input: One array which contains arrays of numbers and strings (let's assume).  
Output: an array of either numbers or strings. 

Rules: 
-If array is empty, return empty array.
-if have empty nested array, just ignore and skip over it. 
-Can assume all nested arrays will contain only number and string types. 
-If there are numbers and number strings, treat them as duplicates. I.e., 1 is viewed as the same as `1`. As such, in the final array you return, keep only one of them. Keep only the FIRST one that appears. 
-want to remove ALL duplicates. Not just number and number string duplicates. E.g.
flattenAndUnique([[1, 2, 3], [3, 4, 5, 'a']]) should give // [1, 2, 3, 4, 5, 'a']
-Assume is case sensitive with non number strings. 

Questions to keep in mind: 
-how to know if have a number string? 
-how to know which comes first? 
======================
Have guard clause to guard against the empty array edge case

Need a bank/lookup table to keep track of what we HAVE seen thus far. 


[1, 2, 3] '3' first check to see if is a number string. Then look up the NUMBER STRING version of it in the lookup table. If is there, do NOT add. 

Actually, should probably check the type for each element, always. Because the program won't have human eyes to deduce like so. 

Important to keep types in check and consistent, particularly with the lookup table. 

To be consistent, enforce lookup table to default to string if have a number . Other elements (non-number strings for example) will retain their typing. Do this because all properties are converted to string types anyways within JS. 

flattenAndUnique([[1, 2, '3'], [3, 4, 5, 'a']])

[1,2,3,4,5,'a']

With number types, convert to string and compare with lookup table. If not, just compare the string as is to the lookup table. 

Data structures...
Object/lookup table to keep track of each element. 
Can probably leave the initial input array as is. Don't need to do any preprocessing there. 

Algorithm: 
-Check if array is empty. If is, return empty array. 
-initialize a result array. Call it `deduplicated`. Initialize to empty array. 
-initialize a lookup table object. Call it `seen`. Initialize to empty object.

-Look through the input array `inputArray`. 
  -For each nested array `nestedArr`, iterate through its own elements
  -For each element of `nestedArr`, check the type of the element. 
    -if is number, convert to string form (number string) and compare with lookup table `seen`. See if the element is there. If not, add the element to `deduplicated` (with its original number typing), and add the STRING form element as a property of the lookup table. 
    -if is string format, compare directly with lookup table, and repeat process above. If is in lookup table, don't add. If is NOT in lookup table, add the string element to `seen` and `deduplicated`. 

-Return `deduplicated`
*/

//724pm started coding. Finished coding at 728pm. Lol. Fast.
function flattenAndUnique(inputArr) {
  if (inputArr.length === 0) return [];

  let deduplicated = [];
  let seen = {};

  inputArr.forEach(nestedArr => {
    nestedArr.forEach(elt => {
      // start with string type
      if (typeof elt === 'string') {
        if (!seen[elt]) {
          seen[elt] = true; 
          deduplicated.push(elt);
        }
      } else if (typeof elt === 'number') {
        let stringForm = String(elt);
        if (!seen[stringForm]) {
          seen[stringForm] = true; 
          deduplicated.push(elt);
        }
      }
    });
  });

  console.log(deduplicated);
}

flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
flattenAndUnique([[1, 2, '3'], [3, 4, 5, 'a']]); // [1, 2, '3', 4, 5, 'a']
flattenAndUnique([[1, 2, '3'], ['2', 2, '2', '1']]); // [1, 2, '3']