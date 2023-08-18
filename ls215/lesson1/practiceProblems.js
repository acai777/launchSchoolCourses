// Practice Problem: Total Square Area 
function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  let totalArea = areas.reduce((acc, currVal) => acc + currVal);

  console.log(totalArea);
}

function totalSquareArea(rectangles) {
  let filtered = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);

  totalArea(filtered);
}

// Practice Problem: Processing Releases 
/*
Process: first, FILTER to keep only objects with both ID and title 
Then do a MAP call where you retain onlu the ID and title properties of the object. Make a new object to hold those properties
*/
function processReleaseData(data) {
  let filteredData = data.filter(movieRelease => movieRelease.id && movieRelease.title);

  let result = filteredData.map(movieObj => {
    let transformed = {};

    transformed.id = movieObj.id; 
    transformed.title = movieObj.title;

    return transformed;
  });

  console.log(result);
  return result;
}

// Practice Problem: Octal
function octalToDecimal(numberString) {
  let length = numberString.length;
  let result = 0;
  for (let i = 0; i < length; i +=1) {
    let exponent = length - 1 - i; 
    result += Number(numberString[i]) * Math.pow(8, exponent); 
  }

  console.log(result); 
}

// Practice Problem: Anagrams 
function anagram(word, list) {
  console.log(list.filter(currWord => currWord.split("").sort().join("") === word.split("").sort().join("")));
}

// Practice Problem: Formatting Bands 
/*
STEPS:
FOREACH, replace country property to 'Canada'
FOREACH, capitalize name property (is the same object, so no need to use MAP tbh)
FOREACH again, remove all dots
*/

function processBands(data) {
  data.forEach(band => {
    band.country = 'Canada';
    band.name = band.name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

    band.name = band.name.split("").filter(char => char != ".").join("");
  });

  console.log(data);
  return data; 
}
 
// Practice Problem: Class Records Summary
/*
Notes:
studentScores is an objecct of properties that are objects themselves. 

The sub-objects are the students, essentially. 
Each sub-object/student has TWO properties of its own: an ID property, and 
a scores property, which is an object that contains scores for the exams 
and exercises. 
 */




























