// NOTE: Run this code from a file; don't use the REPL

// bar();
// function bar() {
//   console.log("this is bar");
// }

// foo();
// const foo = function() {
//   console.log("this is foo");
// };

function logNum() {
  console.log(this.num);
}

//logNum(); // logs undefined. Why? 
          // Because you invoke it like a function and, 
          // in function execution context, JS implicitly 
          // sets the global object `global` to `this.

let obj = {
  num: 42
};

//logNum.call(obj); // logs 42. Why? How `call` works is the 
                  // object you pass in (the first argument) 
                  // becomes the execution context that logNum will refer/has.
                  // You basically invoke the function but also explicitly set `this`. 
                  // Note that this does not mean logNum has to use the keyword `this` 
                  // in any way. If the function `logNum` never used `this.num`/`this`,
                  // then the function runs as normal (you call it basically)

// Example of setting the execution context explicitly but not using `this`:
function testingFunction() {
  console.log("Testing my understanding of the `call` method");
}

let explicitExecContextObj = { hi: 'hello'};
//testingFunction.call(explicitExecContextObj) // logs "Testing my understanding of the `call` method"

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

bar.add.call(foo);