/*LS216 - Asking Questions Exercise

Problem 1
-What does it mean to be the kth distinct string? It seems like we are iterating from left to right, and that is how we determine the order of the kth distinct string, yes? 
-Can I assume every element of the array is a string?
-Can I assume the first input will indeed always be an array? 
-Can I assume the array will be nonempty? 
-Can I assume the second input will always be given? What happens if it is not given?
-Can I assume the second input will always be an integer? 
-For the strings, are we case-insensitive, or are we case-insensitive? For example, consider “a” and “A”; are they considered the same string, or no? 

===== 
Qs missed:
-Can I assume there will always be two arguments? What if there are more? 
-What if the second argument is 0? (edge case you forgot to consider)
-Will the second argument ever be negative (another edge case you forgot) 

=====
How to solve problem 1? 

Input: 
-array of strings
-integer representing the kth distinct string we are interested in

Output: the string which represents the kth distinct string, “” otherwise

Test Cases:
distinctString(["d","b","c","b","c","a"], 2); // "a"
distinctString(["d","b","c","b","c","a"], 3); // ""
distinctString(["a","b","c","d","e","f"], 5); // "e"
distinctString(["d"], 1); // "d"
distinctString(["d"], 2); // "d"
distinctString([], 1); // ""
distinctString([], 0); // "" // if either [] or 0, return ""
distinctString(["a", "A"], 1); // "" // case-insensitive 

DS/A/Process:
Need to guard against weird input: when the array is empty and when the second arg is 0 or negative. Can assume that they will always be arrays and a number. 

Change to all lower case. Case insensitive. 

Need to keep track of two things: 
1) If I have seen the str before
2) What relative ordering I saw the str. Because the relative ordering determines if the str is the kth distinct string. 

Lookup table would be good for point (1), but not so convenient for point (2). As such, using an array/collection might be more appropriate, as an array provides structure/methods to address both points. 

[d, a] go to index (num - 1) (because we are 0 indexed). 

Algorithm: 
- Guard clause: guard against immediately invalid input. This is when we either an empty array or some number <= 0. Can assume will have an array and number as inputs. Ingnore any additional potential arguments. 

- Make all string elements of the array case insensitive. We are case insensitive. 

- Define array called `distinctElements`. Initialize to empty array. Use to keep track of what you've seen thus far that are distinct. 

- Iterate through the preprocessed array `inputArr`. Iterate from left to right. 
  -For each string element, check to if the string element is in `distinctElements`.
    -If it is, use indexOf command to find the index where the string element is in the array, and then delete the string element from `distinctElements`. 
    -If not, push onto `distinctElements`. 
-At the end, result is `distinctElements` which contains the distinct elements, seen from left to right. Look for the `kth` seen string element (probably k - 1, if 0-indexed). If the string element exists, return it. If not, then return an empty string. 
*/

function distinctString(inputArr, k) {
  if (inputArr.length === 0 || k <= 0) return ""; 
  let inputArrLowerCase = inputArr.map(str => str.toLowerCase());
  
  let distinctElements = [];

  inputArrLowerCase.forEach(str => {
    if (distinctElements.includes(str)) {
      let index = distinctElements.indexOf(str);
      distinctElements.splice(index, 1);
    } else {
      distinctElements.push(str);
    }
  });

  let kth = distinctElements[k - 1];
  
  if (!kth) return "";
  return  kth;
}

// Test Cases:
console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["d","b","c","b","c","a"], 3)); // ""
console.log(distinctString(["a","b","c","d","e","f"], 5)); // "e"
console.log(distinctString(["d"], 1)); // "d"
console.log(distinctString(["d"], 2)); // ""
console.log(distinctString([], 1)); // ""
console.log(distinctString([], 0)); // "" // if either [] or 0, return ""
console.log(distinctString(["a", "A"], 1)); // "" // case-insensitive 
console.log(distinctString(["a","a","c","d","e","f"], 4)); // "e"