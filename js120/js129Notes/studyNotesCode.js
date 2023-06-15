/*This file contains random code snippets/tests to deepen my understanding of the JS 120 material, in preparation for the JS129 assessment.*/

// let person = {
//   name: 'Bob', 
//   age: 29,
// }

// console.log(person); 
// console.log(Object.getPrototypeOf(person) === Object.prototype);

/* Demonstration of compact syntax: 
keyName: function(par1, par2, ...) {...}
keyName() {...}

The first is the standard way of defining the key-value pair where the value is a function. The second is compact syntax: you omit the ": function" code. 

There is subtle difference between these when it comes to constructor functions, I believe. 
*/

let prototypeObj = {
  speak() {return "I am speaking";},
  myName: "This entire family's name is Random",
}

// let inheritingObj = {};
// Object.setPrototypeOf(inheritingObj, prototypeObj);
// console.log(inheritingObj); // {}
// console.log(inheritingObj.speak()); // "I am speaking"
// console.log(inheritingObj.myName); // "This entire family's name is Random"
// console.log(inheritingObj.hasOwnProperty("myName")); // false
// console.log(inheritingObj.hasOwnProperty("speak")); // false
// console.log(Object.getPrototypeOf(inheritingObj) === prototypeObj) // true

// let inheritingObj = Object.create(prototypeObj)
// console.log(inheritingObj); // {}
// console.log(inheritingObj.speak()); // "I am speaking"
// console.log(inheritingObj.myName); // "This entire family's name is Random"
// console.log(inheritingObj.hasOwnProperty("myName")); // false
// console.log(inheritingObj.hasOwnProperty("speak")); // false
// console.log(Object.getPrototypeOf(inheritingObj) === prototypeObj) // true

// console.log(inheritingObj.__proto__)
// console.log(Object.getPrototypeOf(inheritingObj));

let obj1 = {
  num: 3475893458934,
  hah: 22,
  test: 100,

  logNum() {
    console.log(this.num);
  },

  testFcn(a,b,c) {
    console.log(this);
    console.log(a + b + c);
  }
}

let obj2 = {
  num: 555,
}

// obj1.logNum();
// obj1.logNum.call(obj2)

// obj1.testFcn.apply(obj2, ['a', 'b', 'c']);


// This tests our understanding of execution context in JS. More specifically, it tests if we understand implicit method execution context. Since we invoked the method as a method call above, the calling object will be bound to `this`. That is, `this` refers to the calling object. Thus, since we invoke `logNum`, the `this.num` wll refer to the `num` property inside obj1, unless invoked otherwise.

// console.log(Object.getOwnPropertyNames(Function.prototype));

function makeObj() {
  return {
    propA: 10, 
    propB: 20, 
  }
}

function Test() {}
// console.log(Object.getOwnPropertyNames(Test))

///////////////////
// const Animal = function(species) {
//   this.species = species; 
//   return species;
// };

// Animal.prototype.sleep = function() {
//   console.log(`The ${this.species} is sleeping`);
// };

// let lion = Animal(`Panthera leo`);

// String.prototype.sleep = function() {
//   console.log("Wow! JS is weird");
// }
// lion.sleep(); 

// Without using the `new` keyword, we are implicitly setting the execution context to the global object (due to the function invocation syntax). Thus `this` is bound to `global` in the function body, and we define a new property `species` set to the argument `"Panthera leo"`. Furthermore, JS won't return an object; it will return what is asked of it, which is `"species"` aka `"Panthera leo"`. This string value is what is assigned to the variable `lion` on line 94. Thus, when you try to call a method from the string value, it won't register the method. JS, under the hood, might try to wrap the string value with a String object, but there is no such String method! BUT, if you do define a method on the prototype object referenced by String.prototype, JS WILL recognize the method...! Wow. That is really cool. 


class Animal {}
class Cat extends Animal {}
let fluffy = new Cat();
// console.log(Object.getPrototypeOf(Cat.prototype) === Animal.prototype); // true

// PROTOTYPE CHAIN:
// fluffy ==> Cat.prototype ==> Animal.prototype ==> Object.prototype ==> null

///////////////////////////////////////////////////////
let speakMixin = {
  speak() {
    console.log("Speak");
  },
};

let gallopMixin = {
  gallop() {
    console.log("Gallop");
  },
};

let humanPrototype = {
  init() {
    return this; 
  },
};

Object.assign(humanPrototype, speakMixin);

let centaurPrototype = {
  slash() {
    console.log("Slashed with sword");
  },
};
Object.assign(centaurPrototype, gallopMixin, speakMixin);

let horsePrototype = {};
Object.assign(horsePrototype, gallopMixin);

let pegasusPrototype = Object.create(horsePrototype);
pegasusPrototype.fly = function() {
  console.log("I am flying");
};

let unicornPrototype = Object.create(horsePrototype);
unicornPrototype.pierce = function() {
  console.log("I am piercing");
};
unicornPrototype.count = 0; 
unicornPrototype.init = function() {
  unicornPrototype.addCount(); 
  return this;
}
unicornPrototype.addCount = function() {
  unicornPrototype.count += 1; 
};
unicornPrototype.getCountCreated = function() {
  console.log(unicornPrototype.count);
};

let unicorn1 = Object.create(unicornPrototype).init();
unicornPrototype.getCountCreated();
let unicorn2 = Object.create(unicornPrototype).init();
unicornPrototype.getCountCreated();
