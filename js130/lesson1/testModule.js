// let logHi = require('./scrap.js');

// console.log(logHi);


const {myArray} = require('./scrap.js'); 

console.log(myArray);

test("testing myArray", () => {
  expect(myArray).toEqual([1,2,3,4,5]);
});
