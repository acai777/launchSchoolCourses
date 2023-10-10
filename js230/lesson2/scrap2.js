// setTimeout(() => console.log("I've printed!"), 0);
// console.log("I think I go first!");


const promise = new Promise(function (resolve, reject) {
  setTimeout(() => console.log("I've printed!"), 0);
  resolve("I am a Promise");
  console.log('meow');
});

promise.then(value => console.log(value));
console.log("I am NOT a Promise");