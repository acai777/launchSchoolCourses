let firstName = 'Arno'; 
let lastName = 'Cai';

let fullName = firstName.concat(' ', lastName);
// console.log(fullName);

let nameArray = fullName.split(" ");
// console.log(nameArray);

let language = 'JavaScript'; 
let idx = language.indexOf('S');
// console.log(idx);

let charCode = language.charCodeAt(idx);
// console.log(charCode);

// console.log(String.fromCharCode(charCode));

// console.log(language.lastIndexOf('a'));

// let a = 'a';
// let b = 'b';

// console.log(a > b);

// b = 'B';

// console.log(a > b);

// ava
// va

// avaScrip 
// vaScrip 

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
// console.log(compoundSentence);

let pi = 22 / 7;
// console.log(pi);
let piString = pi.toString();
// console.log(piString);
// console.log(piString.lastIndexOf('14'));

// const readline = require('readline-sync');
// let response = readline.question('What is your name? ');
// if (response.endsWith('!')) {
//   console.log(`HELLO ${response.slice(0, -1).toUpperCase()}, WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${response}.`);
// }

// Reverse a string
function reverse(str) {
  console.log(str.split("").reverse().join(""));
}

// Acronym 
function acronym(string) {
  console.log(string.split(/[- ]/).map(word => word[0].toUpperCase()).join(""));
}

// Email Validation
function isValidEmail_ownAttempt(email) {
  let parts = email.split('@');
  if (parts.length !== 2) return false; // ensures only one `@` sign

  let [local, domain] = parts; 
  if (!local.match(/^[a-z0-9]+$/i)) return false; 

  let domainParts = domain.split(".");
  if (domainParts.length === 1) return false; 

  for (let index = 0; index < domainParts.length; index +=1) {
    if (!domainParts[index].match(/^[a-z]+$/i)) return false; 
  }

  return true; 
}

function isValidEmail(email) {
  let result = /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
  return result;
}


// console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
// console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
// console.log(isValidEmail('foo@baz.com'));             // returns true
// console.log(isValidEmail('foo@baz.ph'));              // returns true
// console.log(isValidEmail('HELLO123@baz'));            // returns false
// console.log(isValidEmail('foo.bar@baz.to'));          // returns false
// console.log(isValidEmail('foo@baz.'));                // returns false
// console.log(isValidEmail('foo_bat@baz'));             // returns false
// console.log(isValidEmail('foo@bar.a12'));             // returns false
// console.log(isValidEmail('foo_bar@baz.com'));         // returns false
// console.log(isValidEmail('foo@bar.....com'));         // returns false

// Matching Parentheses
function isBalanced(string) {
  let parensCount = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      parensCount += 1;
    } else if (string[i] === ')') {
      parensCount -= 1;
    }

    if (parensCount < 0) {
      return false;
    }
  }

  return parensCount === 0;
}

// console.log(isBalanced('What (is) this?'));        // true
// console.log(isBalanced('What is) this?'));         // false
// console.log(isBalanced('What (is this?'));         // false
// console.log(isBalanced('((What) (is this))?'));    // true
// console.log(isBalanced('((What)) (is this))?'));   // false
// console.log(isBalanced('Hey!'));                   // true
// console.log(isBalanced(')Hey!('));                 // false
// console.log(isBalanced('What ((is))) up('));       // false

// Sentiment Analysis 1 
let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment_One(text) {
  let result = text.split(/\b/).map(word => word.toLowerCase());

  let numberPositive = 0;
  let seenPositive = [];

  let numberNegative = 0;
  let seenNegative = [];

  result.forEach(word => {
    if (positiveWords.includes(word)) {
      numberPositive += 1;
      if (!seenPositive.includes(word)) seenPositive.push(word);
    }
    if (negativeWords.includes(word)) {
      numberNegative += 1;
      if (!seenNegative.includes(word)) seenNegative.push(word);
    }

  });

  let netResult = numberPositive - numberNegative; 
  let sentiment; 

  if (netResult === 0) {
    sentiment = 'Neutral';
  } else if (netResult > 0) {
    sentiment = 'Positive';
  } else {
    sentiment = 'Negative';
  }


  let response = `There are ${numberPositive} positive words in the text\n` + 
                 `Positive sentiments: ${seenPositive.join(', ')}\n\n` + 
                 `There are ${numberNegative} negative words in the text\n` + 
                 `Negative sentiments: ${seenNegative.join(', ')}\n\n` + 
                 `The sentiment of the text is ${sentiment}`;

  console.log(response);
  
}

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';


  
// sentiment(textExcerpt);

// let wordList = textExcerpt.toLowerCase().match(/[a-z']+/g);
// console.log(wordList);

let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

function sentiment(text) {
  let wordList = text.toLowerCase().match(/[a-z']+/g);
  let positives = wordList.filter(word => positiveRegex.test(word));
  let negatives = wordList.filter(word => negativeRegex.test(word));

  console.log('There are ' + String(positives.length) + ' positive words in the text.');
  console.log('Positive sentiments: ' + positives.join(', '));
  console.log('');
  console.log('There are ' + String(negatives.length) + ' negative words in the text.');
  console.log('Negative sentiments: ' + negatives.join(', '));
  console.log('');

  let textSentiment;
  if (positives.length > negatives.length) {
    textSentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    textSentiment = 'Negative';
  } else {
    textSentiment = 'Neutral';
  }

  console.log('The sentiment of the text is ' + textSentiment + '.');
}

// sentiment(textExcerpt);


// Mail Count 
let emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\nEtiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean cursus velit non arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/#\nTo: qux@bar.com#/#\nNulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24-2016#/#\nTo: quux@foo.com#/#\nCurabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec nunc facilisis, ultricies.#/#\nDate: 07-03-2016#/#\nTo: garply@foo.com#/#\nFusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";

// console.log(emailData);

function mailCount(emailData) {
  let emails = emailData.split('##||##');
  let count = emails.length;
  let emailDates = emails.map(email => email.split('#/#')[2]);

  console.log('Count of Email: ' + count);
  console.log('Date Range: ' + displayableDateRange(emailDates));
}

function displayableDateRange(dates) {
  let dateObjects = getDateObjects(dates);
  dateObjects.sort((a, b) => a.valueOf() - b.valueOf());
  return dateObjects[0].toDateString() + ' - ' + dateObjects[dateObjects.length - 1].toDateString();
}

function getDateObjects(dates) {
  return dates.map(date => {
    let dateElements = date.split(' ')[1].split('-');
    let month = parseInt(dateElements[0], 10) - 1;
    let day = parseInt(dateElements[1], 10);
    let year = parseInt(dateElements[2], 10);
    return new Date(year, month, day);
  });
}

// mailCount(emailData);

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

/////////////////////////////////
// Code Review: Longest Sentence
/////////////////////////////////
function longestSentence(text) {
  let sentences = text.match(/\w[^.!?]*[.!?]/g); 
  let longestWordCount = -Infinity; 
  let longestSentence; 

  sentences.forEach(sentence => {
    let currWordCount = getWordCount(sentence);

    if (currWordCount > longestWordCount) {
      longestWordCount = currWordCount;
      longestSentence = sentence;
    } 
  });

  console.log(`${longestSentence}\n`);
  console.log(`The longest sentence has ${longestWordCount} words.`);
}

function getWordCount(sentence) {
  return sentence.split(/\s/).length;
}

// longestSentence(longText);

// let myText = 'It is rather for' +
// ' us to be here dedicated to the great task remaining' +
// ' before us -- that from these honored dead we take' +
// ' increased devotion to that cause for which they gave' +
// ' the last full measure of devotion -- that we here highly' +
// ' resolve that these dead shall not have died in vain' +
// ' -- that this nation, under God, shall have a new birth' +
// ' of freedom -- and that government of the people, by' +
// ' the people, for the people, shall not perish from the' +
// ' earth.';

// console.log(getWordCount(myText));



// Uppercase Check
function isUppercase(str) {
  // console.log(str === str.toUpperCase());
  console.log(!/[a-z]/.test(str));
}

// Delete Vowels
function removeVowels(arr) {
  let result = arr.map(str => {
    return str.replace(/[aeiou]/gi, '');
  });

  console.log(result);
}

// Lettercase Counter
function letterCaseCount(str) {

  let lowercase = str.match(/[a-z]/g) ?  str.match(/[a-z]/g).length : 0;
  let uppercase = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0;
  let neither = str.match(/[^a-z]/gi) ? str.match(/[^a-z]/gi).length : 0;

  return {
    lowercase,
    uppercase,
    neither
  };
}

// Capitalize Words
function wordCap(str) {
  console.log(str.split(/\s/)
     .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
     .join(" "));
}

// Swap Case 
function swapCase(str) {
  return str.split("")
     .map(char => {
      if (char >= 'a' && char <= 'z') return char.toUpperCase();
      if (char >= 'A' && char <= 'Z') return char.toLowerCase();
      return char;
     })
    .join("");
}

// Staggered Caps Part 1
function staggeredCaseOne(str) {
  let toUpper = true; 

  console.log(str.split("")
     .map(char => {
      if (toUpper) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      toUpper = !toUpper; 
      return char;
     })
     .join(""));
}

// Staggered Caps Part 2 
function staggeredCase(str) {
  let toUpper = true; 

  console.log(str.split("")
     .map(char => {

      if (/[^a-z]/i.test(char)) return char;  

      if (toUpper) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      toUpper = !toUpper; 
      return char;

     })
     .join(""));
}

// How Long Are You 

function wordLengths(str) {
  if (!str) return [];

  return str.split(" ").map(word => word.concat(' ', word.length));
}

// Search Word Part 1 (own, wrong solution)
// function searchWord(word, text) {
//   let regex = new RegExp(word, 'gi')
//   console.log(text.split(regex).length)
// }

// Search Word Part 1 (correct)
// function searchWord(word, text) {
//   const regex = new RegExp(word, 'gi');
//   const matches = text.match(regex);

//   console.log(matches ? matches.length : 0)
// }

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(text.split(/sed/gi));
// console.log(text.split(/sed/gi).length);

// Search Word Part 2
function searchWord(word, text) {
  let regex = new RegExp(`(\\b${word}\\b)`, 'gi')
  return text.replace(regex, `**${word.toUpperCase()}**`);
}

console.log(searchWord('sed', text));






