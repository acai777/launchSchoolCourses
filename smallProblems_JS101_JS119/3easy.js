readline = require('readline-sync');

function crunch(str) {
  let strDeduplicate = '';

  for (let i = 0; i < str.length;) {
    let curr = str[i];
    strDeduplicate = strDeduplicate + curr;
    while (curr == str[i] && i < str.length) {
      i += 1;
    }
  }
  return strDeduplicate;
}

function logInBox(text) {
  let length = text.length; 

  console.log(`+-${'-'.repeat(length)}-+`);
  console.log(`| ${' '.repeat(length)} |`);
  console.log(`| ${text} |`);
  console.log(`| ${' '.repeat(length)} |`);
  console.log(`+-${'-'.repeat(length)}-+`);

}

function stringy(posInt) {
  let result = ''; 
  let odd = true; 

  for (let i = 0; i < posInt; i += 1) {
    if (odd) {
      result = result + '1';
      odd = false;
    } else {
      result = result + '0';
      odd = true;
    }
  }

  console.log(result);
}

function triangle(num) {
  for (let i = 0; i < num; i += 1) {
    console.log(`${' '.repeat(num - (i + 1))}${'*'.repeat(i + 1)}`); 
  }
}

function madlib() {
  console.log("Enter a noun:");
  let noun = readline.prompt();

  console.log("Enter a verb:");
  let verb = readline.prompt();

  console.log("Enter an adjective:");
  let adjective = readline.prompt();

  console.log("Enter an adverb:");
  let adverb = readline.prompt();

  let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
  let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
  let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

  console.log(sentence1);
  console.log(sentence2);
  console.log(sentence3);
}

function twice(num) {
  let numString = num.toString(10);

  if (numString.length % 2 === 1) {
    return num*2;
  } else {
    if (numString.substring(0, numString.length / 2) === numString.substring(numString.length / 2)) {
      return num;
    } else {
      return num*2;
    }
  }
}

function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3; 

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

function cleanUp2(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (isAlphabetic(str[i])) {
      result = result + str[i];
    } else {
      result = result + ' ';
      while (i+1 < str.length && !isAlphabetic(str[i+1])) {
        i += 1; 
      }
    }
  }

  console.log(result);
}

function isAlphabetic(char) {
  return char.match(/[a-z]/i); // will return null (falsy) if not alphabetic
}

function cleanUp(str) {
  return str.replace(/[^a-z]/gi, ' ').replace(/\s+/g, ' ');
}

function century(yr) { // is wrong. Come back to fix logic at some point.
  let cent = String(Math.ceil(yr / 100)); 
  if (cent === '1') {
    console.log("1st");
  } else if (cent === '2') {
    console.log(cent + 'nd');
  } else if (cent === '3') {
    console.log(cent + 'rd');
  } else {
    console.log(cent + 'th');
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

/*
1st
2nd 
3rd 
4th
5th
6th
7th

only any century with a ____2 or ____3 have the "nd" or "rd." Only the first century as "st" as ending. Everything else is "th."
*/