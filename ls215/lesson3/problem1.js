/*
Problem Description

Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.
*/




/*
PROBLEM
Input: string of numbers and potentially other characters. 
Output: string of numbers. string is 10 digits in length i.e., is XXX-XXX-XXXX

Several rules:
-number may contain special characters such as spaces, dash, dot, and parentheses. Ignore these. So ignore: -, ., (, ), and ` `. 
-if number is < 10 digits, bad number. 
-if number is > 11 digits, bad number. 
-So, only POTENTIALLY good numbers are 10 and 11 digits. 
  -10 digit numbers are always good.
  -For 11 digit numbers, if first number is 1, is a good number. If first number is some other number, is bad number. 
-For bad numbers, return a string of 10 zeros i.e., 0000000000

Questions: 
-can I assume only contain numbers and these special characters? Nothing else? 
-will we only have string inputs? 

EXAMPLES
"111-111-1234" -> 1111111234 // valid number, is 10 digits long. 
"1-111-111-1111" -> 1111111111 // valid number, first number is 1. 
"0-111-111-1111" -> 0000000000 // is 11 digit, but first number is not 1.

"125-1231" -> 0000000000 // less than 10 digits 
"11-111-111-1111" -> 0000000000 // over 10 digits 

------------------------------------------------------- 
D/A
String - do string manipulation. Get rid of special characters  
  - replace those special characters with '' i.e., empty space. 
Count up numbers left. 
  -if have 10 digits, valid number. Return that number as is. 
  -if have 11 digits left, check first digit. 
    -if first digit is 1, valid number. Return the 10 digits after
    -if first digit is anything other than 1, invalid. Return 10 zeros.
  -if have any count of digits other than 11 or 10, return 10 zeros. invalid number
*/

const INVALID = '0'.repeat(10); 

function cleanNumber(str) {
  let cleaned = str.replace(/[^0-9]/g, '');
  let len = cleaned.length; 

  if (len === 11 && cleaned[0] === '1') {
    return cleaned.slice(1);
  } else if (len === 10) {
    return cleaned;
  } else {
    return INVALID;
  }
}













