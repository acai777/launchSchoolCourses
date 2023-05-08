let exampleArr;

// Ascending numerical sort
exampleArr = [4, 98, 45, 10, 14, 99, 3, 8, 44];
//console.log(exampleArr);
exampleArr.sort((a, b) => {
  if (a > b) {
    return 1; 
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
})

//console.log(`ASCENDING:\n${exampleArr}`);

// Descending numerical sort 
exampleArr = [4, 98, 45, 10, 14, 99, 3, 8, 44];
//console.log(exampleArr);
exampleArr.sort((a, b) => {
  if (a > b) {
    return -1; 
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
})

//console.log(`DESCENDING:\n${exampleArr}`);

// Simplified, ascending
exampleArr = [4, 98, 45, 10, 14, 99, 3, 8, 44];
exampleArr.sort((a,b) => a - b)
//console.log(`ASCENDING SIMPLIFIED:\n${exampleArr}`);

// Simplified, descending
exampleArr = [4, 98, 45, 10, 14, 99, 3, 8, 44];
exampleArr.sort((a,b) => b - a);
//console.log(`DESCENDING SIMPLIFIED:\n${exampleArr}`);

/////////////
// EXERCISES
/////////////
// How would you sort the following array by the lengths of each word?
// Assume by ascending length (from smallest length to largest)
let words = ['go', 'ahead', 'and', 'jump'];
words.sort((a, b) => a.length - b.length);
//console.log(words);

// Sort array of subarrays. Each subarray contains scores of three rounds. 
// Sort from least to greated by total score across the three rounds 
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let aSum = a.reduce((acc, currVal) => acc + currVal, 0); 
  let bSum = b.reduce((acc, currVal) => acc + currVal, 0); 

  return aSum - bSum; 
});
//console.log(scores);

// Understanding deep copy. 
let arr = [{ b: 'foo' }, ['bar', {hi:'test'}]];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
deepCopiedArr[1][1]['addedKey'] = 'addedValue';

// console.log(arr);
// console.log(deepCopiedArr);
