ode////////////////////////////////////////////////
// Building our own forEach method 
////////////////////////////////////////////////
function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

// let foo = new Foo("Item: ");
// forEach(["a", "b", "c"], item => console.log(item)); // works bc never use `this` in the callback function
// forEach([1, 2, 3], foo.showItem, foo); // works bc have an appropriate object with a `prefix` property for this v specific callback function
// //forEach([4, 5, 6], foo.showItem); // does not work. TypeError.

// forEach(["a", "b", "c"], function(value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// });

////////////////////////////////////////////////
// Building our own filter method 
////////////////////////////////////////////////
function filter(array, callback, thisArg) {
  let filteredArr = [];
  
  for (let index = 0; index < array.length; index += 1) {
    if (!!callback.call(thisArg, array[index], index, array) === true) {
      filteredArr.push(array[index]);
    }
  }

  return filteredArr;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string")); // => [ 'abc', 'xyz' ]

// Building our own map method 
function map(array, callback, thisArg) {
  let transformedArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let transformedElt = callback.call(thisArg, array[index], index, array);
    transformedArray.push(transformedElt);
  }

  return transformedArray;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

////////////////////////////////////////////////
// Building our own reduce method 
////////////////////////////////////////////////
function reduce(array, callback, initialValue) {
  let index = 0;
  if (!initialValue) {
    initialValue = array[index];
    index = 1;
  }

  let accumulator = initialValue; 

  for (index; index < array.length; index += 1) {
    let currentValue = array[index];
    accumulator = callback(accumulator, currentValue);
  }

  return accumulator;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]

////////////////////////////////////////////////
// Building our own filter method using reduce 
////////////////////////////////////////////////
function _filter(array, callback) {
  return array.reduce((acc, currVal) => {
    if (callback(currVal)) {
      acc.push(currVal);
    }

    return acc; 
  }, []);
}

////////////////////////////////////////////////
// Building our own map method using reduce 
////////////////////////////////////////////////
function _map(array, callback) {
  return array.reduce((transformedList, currVal) => transformedArray.push(callback(currVal)), [])
}

