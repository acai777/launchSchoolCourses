// setTimeout(function() {
//   console.log('!');
// }, 3000);

// setTimeout(function() {
//   console.log('World');
// }, 1000);

// console.log('Hello');


// function delayLog() {
//   setTimeout(() => console.log(1), 1000);
//   setTimeout(() => console.log(2), 2000);
//   setTimeout(() => console.log(3), 3000);
//   setTimeout(() => console.log(4), 4000);
//   setTimeout(() => console.log(5), 5000);
//   setTimeout(() => console.log(6), 6000);
//   setTimeout(() => console.log(7), 7000);
//   setTimeout(() => console.log(8), 8000);
//   setTimeout(() => console.log(9), 9000);
//   setTimeout(() => console.log(10), 10000);
// }

// delayLog();


/////////////////////////
/////////////////////////
/////////////////////////
/*
setTimeout(function() { 
  setTimeout(function() { 
    q();  // 7
  }, 15);

  d(); // 3

  setTimeout(function() {
    n(); // 5
  }, 5); 

  z();  // 4
}, 10);

setTimeout(function() {
  s(); // 6
}, 20);

setTimeout(function() {
  f(); // 2
});

g(); // 1

// ORDER: g(), f(), d(), z(), n(), s(), q()
*/

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

function startCounting() {
  let i = 1; 
  return setInterval(function() {
    console.log(i);
    i += 1; 
  }, 1000);

}

let id = startCounting();

function stopCounting(id) {
  clearInterval(id);
}

setTimeout(() => stopCounting(id), 10000);




