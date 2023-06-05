function joinOr(arr, firstDel = ", ", lastDel = "or") {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return arr.join(` ${lastDel} `);
  } else {
    return arr.slice(0, arr.length - 1).join(firstDel) + firstDel + lastDel + ' ' + arr.slice(-1);
  }
}

// obj is the context for `joinOr`; replace it with the correct context.
console.log(joinOr([1, 2]));                  
console.log(joinOr([1, 2, 3]));               
console.log(joinOr([1, 2, 3], '; '));       
console.log(joinOr([1, 2, 3], ', ', 'and'));






