/*
3pm - 330pm (took longer bc of bug with isAnagram helper method)
Write a program that takes a word and a list of possible anagrams and selects the correct sublist that contains the anagrams of the word.

For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.

Rules
-must create class called Anagram. 
-input is the string you would test the list of possible anagrams against.
-Class has one method `match` which accepts a list of potential anagrams as an argument. 
-if no anagram detected, return empty list. 
-return all possible anagrams in list.
-note than an identical word is NOT an anagram. Must be a different word. 
-anagrams are case insensitive

D:
potentially just arrays to keep track of the characters

A:
Lots of moving parts. At the end of the day, want to compare the string we have against the list and see if there is an anagram. We are case-insensitive, and do NOT consider the same string value as an anagram. 

Might just create helper method to determine whether the input is an anagram.
Then, for the `match` method, just check to see if the word is an anagram using this helper method. Note that, because we are case insensitive, want to input either all lower case or all upper case for the string input (and be sure to make the list of all possible anagrams consistent with that input format). If the string input is indeed an anagram, then we can append the string to our list of results. We return this list at the end of iterating through the list of words to check on. 
*/

class Anagram {
  constructor(str) {
    this.str = str.toLowerCase(); // have formatted as a list of ind characters
  }

  match(listOfStr) {
    let listAnagrams = [];
    listOfStr.forEach(str => { // arrow fcn takes in surrounding context and sets as execution context when invoked.
      if (this.isAnagram(str.toLowerCase())) {
        listAnagrams.push(str);
      }
    });

    return listAnagrams;
  }
  isAnagram(inputStr) {
    // initial edge case for if is same string value.
    if (this.str === inputStr) return false; 

    let inputStrList = inputStr.split("");
    let strList = this.str.split(""); 
    for (let index = 0; index < inputStrList.length; index += 1) {
      let char = inputStrList[index];
      if (strList.includes(char)) {
        let charIndex = strList.indexOf(char); // the bug was you were using the index from the input string list, not the original string list
        strList.splice(charIndex, 1);
      } else {
        return false;
      }
    }

    return strList.length === 0;
  }
}

module.exports = Anagram;