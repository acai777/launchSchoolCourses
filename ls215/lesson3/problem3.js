/*
11:40am - 1210pm 

============================================================================
PROBLEM
- Can only use each block once. Can use as many of the blocks to form the word. Can only pick one letter from each block (where each block consists of two letters). 
- Consider the blocks to be case insensitive. Consider just enforcing all letters to be of the same cap initially. 

Input: word string
Output: boolean i.e., true or false. 

Questions:
- What is the data structure of the collection? 
- Are the input strings only consisting of letters? Can they contain any other characters? Can they be any other type? 

============================================================================
TEST CASES 
isBlockWord('BATCH') // true 
isBlockWord('BUTCH'); // false
isBlockWord('jest'); // true case insensitive
isBlockWord(''); // false

B:O O:B X:K K:X D:Q Q:D C:P P:C N:A A:N
G:T T:G R:E E:R F:S S:F J:W W:J H:U U:H
V:I I:V L:Y Y:L Z:M M:Z

============================================================================
Data Structure 
input string -> keep it as a string, but enforce it to be all upper case. 
collection of spelling blocks -> using an object makes most sense. 
  - {B:O, O:B, X:K, K:X, ... L:Y, Y:K, Z:M, M:K}

Algorithm 
- guard clause against empty string
- input string `word`. Convert to all upper case letters 
- make the collection called BUILDING_BLOCKS 
-Iterate from left to right. Start with the left most letter of `word`. 
  -For the current letter `currLetter`, check to see if the letter is in BUILDING_BLOCKS
    -If the letter `X` IS in BUILDING_BLOCKS, delete BUILDING_BLOCKS[X] AND BUILDING_BLOCKS[BUILDING_BLOCKS[X]].
    -If the letter `X` is NOT in BUILDING_BLOCKS, then return false
-If reach end of the iteration without breaking early (i.e., returning), know you are able to build the world with the building blocks. Thus, return true 
*/

// let str = "B:O O:B X:K K:X D:Q Q:D C:P P:C N:A A:N G:T T:G R:E E:R F:S S:F J:W W:J H:U U:H V:I I:V L:Y Y:L Z:M M:Z";
// let resultStr = str.split(" ").map(block => block.slice(0, 2) + "'" + block.slice(2) + "'").join(", ");
// console.log(resultStr);

function isBlockWord(word) {

  if (!word) return false; 

  let wordUpperCase = word.toUpperCase(); 
  
  const SPELLING_BLOCKS = {B:'O', O:'B', X:'K', K:'X', D:'Q', Q:'D', C:'P', P:'C', N:'A', A:'N', G:'T', T:'G', R:'E', E:'R', F:'S', S:'F', J:'W', W:'J', H:'U', U:'H', V:'I', I:'V', L:'Y', Y:'L', Z:'M', M:'Z'};

  for (let i = 0; i < wordUpperCase.length; i +=1) {
    let currLetter = wordUpperCase[i]

    if (!SPELLING_BLOCKS[currLetter]) return false; 

    delete SPELLING_BLOCKS[SPELLING_BLOCKS[currLetter]];
    delete SPELLING_BLOCKS[currLetter]; 
  }

  return true; 
}

console.log(isBlockWord('BATCH')) // true 
console.log(isBlockWord('BUTCH')) // false
console.log(isBlockWord('jest')) // true case insensitive
console.log(isBlockWord('')) // false

/*
Reflection: 
-generally, your process is good. You had a few bugs after your first implementation of the alg you devised, however you were able to debug quickly and successfully with a few console.log statements. 

-Good job coming up with the algorithm and thinking about how to represent the initial inputs. 

-Good catch with the empty string edge case. It was not provided to you as a test case, but something that your function might ultimately fail and return a wrong value if not accounted for. 
*/