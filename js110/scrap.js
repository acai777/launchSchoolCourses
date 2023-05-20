// Reverse a string using only the reduce method

function reverse(str) {
  console.log(str.split("").reduce((acc, currChar) => currChar + acc, ''));
}


reverse('hi how are you doing?');



