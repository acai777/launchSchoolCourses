/*
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


////////////////////////////// //////////////////////////////
// Examples to solidify your understanding
////////////////////////////////////////////////////////////
let myObj = {
  myName: 'Adam',
  myJob: 'research',
  myHobby: 'basketball',
  myAge: '26',
};

let linkObj = {
  myName: 'Link',
  myJob: 'saving Hyrule',
  myHobby: 'collecting Korok seeds',
  myAge: '????',

  selfIntro() {
    console.log(`My name is ${this.myName}, my job is ${this.myJob}, and my age is: ${this.myAge}`);
  },
}

// linkObj.selfIntro(); // method execution context - implicitly set `this` to refer to linkObj i.e., the object you call the method on. 
// linkObj.selfIntro.call(myObj); // invokes the method selfIntro (from linkObj), but explicitly sets the execution context to myObj. 
// let testImplicitFunctionExecContext = linkObj.selfIntro; 
// testImplicitFunctionExecContext(); // implicitly sets the execution context to that of the global object `global` bc is function invocation call. 
// let permanentObj = linkObj.selfIntro.bind(myObj); 
//     // permanently sets `this` to refer to myObj. Returns a NEW function which does not affect linkObj 
//     // permanentObj will have myObj as `this` permanently. Cannot change that
//     // note that permanentObj is invoked like `permanentJob()` here. But you can technically still invoke it like a method. How? See below.
// permanentObj();
// linkObj.testOfPermanence = permanentObj
// linkObj.testOfPermanence();

// let obj2 = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     }, this);
//   },
// };

// obj2.foo();

// [1, 2, 3].forEach(function(number) {
//   console.log(String(number) + ' ' + this.a + ' ' + this.b);
// }, this);

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  },
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);

//   alternative solution
//   let newFcn =  func.bind(context); 
//   let returnVal = newFcn();
//   console.log(returnVal);
}

// logReturnVal(turk.getDescription.bind(turk));

let foo3 = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

// foo3.incrementA();
// foo3.incrementA();
// foo3.incrementA();
// console.log(foo.a)

*/

let proto = {
  prop1: 'value1',
  prop2: 'value2',
  blahblah: "i don't even know anymore",
  name: 'Boo',

  testFunction() {
    console.log(`My name is ${this.name}`);
  }
}

let child = Object.create(proto);
// console.log(child);
// console.log(proto);

// console.log('name' in child);
// console.log(child.hasOwnProperty('name'));

// console.log(Object.getPrototypeOf(child).hi = 'test');
// console.log(proto);

////////////////

// console.log(proto.isPrototypeOf(child));

console.log(Object.keys(Object.getPrototypeOf(proto)));








