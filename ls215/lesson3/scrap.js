function longestSentence(text) {
  let sentences = text.match(/\w[^.!?]*[.!?]*/g); 
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
  // console.log(sentence.split(/\s+/));
  return sentence.split(/\s+/).length;
}

// console.log(longestSentence("No punctuation"));
console.log(longestSentence("Hello \n world."));

