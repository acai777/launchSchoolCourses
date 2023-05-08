// Ascending numerical sort
console.log(exampleArr);
let exampleArr = [4, 98, 45, 10, 14, 99, 3, 8, 44];
exampleArr.sort((a, b) => {
  if (a > b) {
    return 1; 
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
})

console.log(exampleArr);
