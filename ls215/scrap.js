function myForEach(array, func) {
  for (let ind = 0; ind < array.length; ind +=1) {
    func(array[ind], ind, array);
  }
}

function myFilter(array, func) {
  let filtered = [];

  for (let i = 0; i < array.length; i+= 1) {
    let elt = array[i];

    if (func(elt, i, array)) {
      filtered.push(elt);
    }
  }

  return filtered; 
}

function myMap(array, func) {
  let transformed = [];

  for (let i = 0; i < array.length; i +=1) {
    transformed.push(func(array[i], i, array));
  }

  console.log(transformed);
  return transformed; 
}

function myReduce(array, func, initial) {

  let startIndex = 0; 

  if (!initial) {
    initial = array[0];
    startIndex += 1; 
  }

  let accumulator = initial;

  for (let i = startIndex; i < array.length; i +=1) {
    accumulator = func(accumulator, array[i], i, array);
  }

  console.log(accumulator);
  return accumulator;
}

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i +=1) {
    if (!func(array[i], i, array)) return false;
  }

  return true;
}

