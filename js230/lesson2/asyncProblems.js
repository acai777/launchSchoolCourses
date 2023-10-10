
// // 1 
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Launch School"), 2000)
// });

// myPromise.then(value => console.log(value));

// // 2 
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Error: Not Launch School"), 2000);
// });

// myPromise.catch(value => console.log(value));

// // 2 (alternative function writeup)
// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() { 
//     reject("Error: Not Launch School") 
//   }, 2000); 
// });

// myPromise.catch(function(value) {
//   console.log(value)
// });










// // const test = Promise.resolve("A");
// const test = new Promise((resolve, reject) => {
//   resolve('A');
// });

// (async () => {
//   try {
//     console.log(await test);
//   } catch {
//     console.log("E");
//   } finally {
//     console.log("B");
//   }
// })();

let myPromise = Promise.resolve(5); 
console.log(myPromise);
myPromise.then(val => console.log(val));
console.log('hi');









