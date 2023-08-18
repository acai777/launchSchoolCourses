// let text = 'The quick brown fox jumps over the lazy dog.';

// function countWordInText(word, text) {
//   let cleaned = text.replace(/[^a-z ]/gi, "");
//   let regex = new RegExp(`${word}`, "gi");
//   let matches = text.match(regex);

//   console.log(matches.length);
// }

// countWordInText('the', text);    // 2
// countWordInText('dog', text);    // 1

// function acronym(string) {
//   let words = string.split(/[^a-z]+/gi);
//   console.log(words.map(word => word[0].toUpperCase()).join(""));
// }

// acronym('Portable Network Graphics');                  // "PNG"
// acronym('First In, First Out');                        // "FIFO"
// acronym('PHP: HyperText Preprocessor');                // "PHP"
// acronym('Complementary metal-oxide semiconductor');    // "CMOS"
// acronym('Hyper-text Markup Language');                 // "HTML"


// function isValidEmail_OwnAttempt(email) {
//   let components = email.split("@");
//   if (components.length !== 2) return false; 

//   let [localPart, domainPart] = components; 

//   // Check local part 
//   if (localPart.match(/^[a-z0-9]+$/gi) === null) return false;
  
//   // Check domain part 
//   let domainComponents = domainPart.split(".");
//   if (domainComponents.length < 2) return false; 

//   let valid = domainComponents.every(component => component.match(/^[a-z]+$/gi) !== null);
//   if (!valid) return false;

//   return true; 

// }

// function isValidEmail(email) {
//   return /^[a-zA-Z0-9]+@([a-zA-z]+\.)+[a-zA-z]+$/.test(email);
// }


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

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let matched = text.match(/[a-z']+/gi)
  console.log(matched)
}

sentiment(textExcerpt);

// console output







