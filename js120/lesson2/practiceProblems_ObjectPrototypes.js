
let foo_origin = { bar: "test" };
let fooA = { bar: 1 };
Object.setPrototypeOf(fooA, foo_origin);
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

// assignProperty(fooC, "bar", 2);
// console.log(foo_origin.bar); // "test";
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

//=======================

function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}


fooC['haha'] = 'testing again';
// console.log(fooC);
// Object.keys(fooC).forEach(property => {
//   console.log(`${property}: ${fooC[property]}`);
// });

// for (let property in fooC) {
//   console.log(`${property}: ${fooC[property]}`);
// }


// How to create object that does not have a prototype:
let newObj = Object.create(null);
console.log(Object.getPrototypeOf(newObj));