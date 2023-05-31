function test2() {
  return;
}
console.log(test2.prototype); // {}
  // shows {}, a seemingly empty object as the default prototype. Why? 
  // Bc console.log() effectively only shows the ENUMERABLE properties only. 
  // To see all the properties, use the Object.getOwnPropertyNames() method.
  // Will obtain an array of all the keys, including the non-enumerable ones. 
console.log(Object.getOwnPropertyNames(test2.prototype)); // [ 'constructor' ]
console.log(test2.prototype.constructor); // [Function: test2]

test2.check = 'This is a check to verify that, indeed, all functions are objects in JS';
console.log(test2.prototype.constructor); 
  // OBTAIN THE FOLLOWING (makes sense):
  // [Function: test2] {
  //   check: 'This is a check to verify that, indeed, all functions are objects in JS'
  // }

/*
Key takeaways: 
1) `test2` is a function object; it is an object where you can add properties, as shown above.
2) test2.prototype is a property whose values refers to an object, what we call the function prototype.
The function prototype becomes the prototype of the newly returned object when use test2 as 
a constructor. 
3) The test2.prototype object (the function prototype), by default, comes with ONE non-enumerable
property/key, `constructor`. This constructor property points to the function test2 itself. 
In general, if `fcn` were a generic function name, you have the following important code to remember:
  -fcn.prototype (is the function prototype, which comes with one property, `constructor`)
  -fcn.prototype.constructor (this property refers back to the function fcn itself)
  -fcn.randomNewPropertyName = 'blahblahblah' (you can add properties to the function, which is an object)
*/

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(test2)));
console.log(Object.getPrototypeOf(test2) === Function.prototype)


////////////////////////////////
////////////////////////////////
////////////////////////////////

let testObj = {'hi': 'foo'};
console.log(Object.getPrototypeOf(testObj)); // [Object: null prototype] {}
console.log(Object.getPrototypeOf(testObj) === Object.prototype); // logs true!!!!!!!!!!!!! 
  // What does this mean? It means the default prototype for objects created using the 
  // object literal syntax is the function prototype of the Object constructor, Object.prototype. 
  // Omg. It is coming full circle now; Object is a constructor function; Function is a constructor function.
  // They each have a prototype property, which comes equipped with all the methods you are familiar with 
  // that come pre-equipped/available to 
  // all objects (e.g., isPrototypeOf, toString) and functions (e.g., call, bind, apply) respectively 