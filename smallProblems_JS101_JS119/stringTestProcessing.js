// Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
function isUppercase(str) {
  //console.log(str.split("").every(char => char === char.toUpperCase())); 
  //console.log(str === str.toUpperCase());
  return str === str.toUpperCase();
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.
function removeVowels(arr) {
  let newArr = [];

  arr.forEach(str => {
    let removedArr = 
      str.split("").filter(char => (!'aeiou'.includes(char.toLowerCase())));
    newArr.push(removedArr.join(""));
  });

  //console.log(newArr);
  return newArr;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

/*
Input: str
Output: obj with three properties: one on # lower case, one on # uppercase, one on neither upper nor lower case letters. 

Rules: 
-must be object with three properties, even if input is empty string 

DS: 
N/A

Algorithm/Steps:
Iterate through string directly.
Check if char is lower. If so, add one to the properproperty value of object
Check if char is upper. If so, add one to the proper property value of object
If neither, add one to the proper property value of object. 
Return object.

Two helper functions: 
isUpperCase() 
isLowerCase()
*/

function letterCaseCount(str) {
  let obj = {
    lowercase: 0,
    uppercase: 0, 
    neither: 0,
  };

  for (let ind = 0; ind < str.length; ind += 1) {
    if (isLowerCase(str[ind])) {
      obj["lowercase"] += 1;
    } else if (isUpperCase(str[ind])) {
      obj["uppercase"] += 1;
    } else {
      obj["neither"] += 1;
    }
  }

  //console.log(obj);
  return obj;
}

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.
// You may assume that a word is any sequence of non-whitespace characters.


/*
Algorithm:
Isolate and identify each word of the string
For each word, capitalize the word char and force all subseq chars to be lower case
Return said word
Return the new string with these modifications

Code:
Convert string into array, use empty space as separator
Call map(). for each elt in the callback function (the word), return elt[0].toUpperCase().concat(elt.slice(1));

join the array back into a string. Use join with " " as delimitor.
return the string
*/

function wordCap(str) {
  let arrOfWords = str.split(" ");
  let modifiedArr =
    arrOfWords.map(word => word[0].toUpperCase().concat(word.slice(1).toLowerCase()));

  //console.log(modifiedArr.join(" "));
  return modifiedArr.join(" ");
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
function swapCase(str) {
  let modified = str
    .split("")
    .map(elt => {
      if (elt >= 'a' && elt <= 'z') {
        return elt.toUpperCase();
      } else if (elt >= 'A' && elt <= 'Z') {
        return elt.toLowerCase();
      } else {
        return elt;
      }
    })
    .join("");

    //console.log(modified)
    return modified;
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.
function staggeredCase(str) {
  let capitalize = true; 

  let res = str
    .split("")
    .map(char => {
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        if (capitalize) {
          capitalize = !capitalize;
          return char.toUpperCase();
        } 

        capitalize = !capitalize; 
        return char.toLowerCase();
        } else {
          return char;
        }
      })
    .join("");

  //console.log(res);
  return res;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

function staggeredCaseFurtherExploration(str, countAll = true) {
  let strArr = str.split("");
  let capitalize = true; 

  let result = 
  strArr.map((char, index) => {
    if (countAll) {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    } else {
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        if (capitalize) {
          capitalize = !capitalize;
          return char.toUpperCase();
        } 

        capitalize = !capitalize; 
        return char.toLowerCase();
        } else {
          return char;
        }
    }
  })
  .join("");

  //console.log(result);
  return result;
} 

staggeredCaseFurtherExploration('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCaseFurtherExploration('ALL_CAPS');                     // "AlL_CaPs"
staggeredCaseFurtherExploration('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

staggeredCaseFurtherExploration('I Love Launch School!', false);        // "I LoVe lAuNcH ScHoOl!"
staggeredCaseFurtherExploration('ALL_CAPS', false);                     // "AlL_CaPs"
staggeredCaseFurtherExploration('ignore 77 the 4444 numbers', false);   // "IgNoRe 77 ThE 4444 nUmBeRs"

// Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.
// You may assume that every pair of words in the string will be separated by a single space.

function wordLengths(str = '') {
  if (str.length === 0) {
    //console.log([]);
    return [];
  }

  let arr = str.split(" ");

  let result = arr
    .map(word => {
      return word + ' ' + String(word.length);
    });

  //console.log(result);
  return result;
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

// Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.
// You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas. Also assume that the search is case-insensitive.

function searchWordOwn(word, text) {
  word = word.toLowerCase();
  let arrOfWords = text.split(" ");
  let count = 0; 

  arrOfWords.forEach(textWord => {
    textWord = textWord.toLowerCase(); 

    if (textWord === word) {
      count += 1;
    }

  });

  console.log(count);
  return count;
}

function searchWord(word, text) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = text.match(regex);

  let res = matches ? matches.length : 0;
  //console.log(res);
  return res;
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3
searchWord('qui', text);      // should return 4, NOT 13

// The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.
// For this exercise, write a function that takes a word and some text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

function searchWordTwo(word, text) {
  word = word.toLowerCase();
  let arrOfWords = text.split(" ");

  arrOfWords.forEach((textWord, ind) => {
    textWord = textWord.toLowerCase(); 

    if (textWord === word) {
      arrOfWords[ind] = `**${textWord.toUpperCase()}**`
    }

  });

  let res = arrOfWords.join(" ");
  //console.log(res);
  return res;
}

const text2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

searchWordTwo('sed', text2);
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

