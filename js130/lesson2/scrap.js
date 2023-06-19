"use strict";

function makeCounterLogger(start) {
  return function(finish) {
    if (finish >= start) {
      for (let num = start; num <= finish; num +=1) {
        console.log(num);
      }
    } else if (finish < start) {
      for (let num = start; num >= finish; num -=1) {
        console.log(num);
      }
    }

  }
}

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

function _makeList() {
  let todoList = [];
  return function(todo) {

    if (todoList.includes(todo)) {
      todoList.splice(todoList.indexOf(todo), 1);
      console.log(`${todo} removed!`);
    } else if (todo !== undefined) {
      todoList.push(todo); 
      console.log(`${todo} added!`);
    } else {
      if (todoList.length !== 0) {
        todoList.forEach(todo => console.log(todo));
      } else {
        console.log("The list is empty.");
      }
    }

  }
}

// let list = makeList();
// list();
// list("make breakfast");
// list("read book");
// list();
// list("make breakfast");
// list();

function __makeList() {
  return {
    myList: [],

    add(newItem) {
      let index = this.myList.indexOf(newItem); 
      if (index === -1) {
        this.myList.push(newItem);
        console.log(`${newItem} added!`)
      }
    },

    remove(item) {
      let index = this.myList.indexOf(item);
      if (index !== -1) {
        this.myList.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },

    list() {
      this.myList.forEach(item => console.log(item));
    },
  }
}

// let list = makeList();
// list.add("peas");

// list.list(); 
// list.add("corn");
// list.list(); 

// list.remove("peas");

// list.list();

function makeList() {
  let myList = [];

  return {
    add(newItem) {
      let index = myList.indexOf(newItem); 
      if (index === -1) {
        myList.push(newItem);
        console.log(`${newItem} added!`)
      }
    },

    remove(item) {
      let index = myList.indexOf(item);
      if (index !== -1) {
        myList.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },

    list() {
      myList.forEach(item => console.log(item));
    },
  }
}

// let list = makeList();
// list.add("peas");

// list.list(); 
// list.add("corn");
// list.list(); 

// list.remove("peas");

// list.list();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Recursive IIFE solution (question 7 from the "Practice Problems: Immediately Invoked Function Expressions" page)
// (function countdown(number) {
//   // if (number === 0) {
//   //   console.log(number); 
//   // } else {
//   //   console.log(number); 
//   //   countdown(number - 1);
//   // }

//   if (number < 0) return; 
//   console.log(number);
//   countdown(number - 1);
// })(7);

// function product() {
//   console.log(arguments.length); 
//     // has a length property! Get length of 4 for example below.
//   console.log(Object.getOwnPropertyNames(arguments)); 
//     // Get the following for the example below: [ '0', '1', '2', '3', 'length', 'callee' ]
//   return Object.values(arguments).reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5); 
// console.log(result);

// function func(arr) {
//   let [first, ...rest] = arr; 
//   let last = rest.splice(-1, 1)[0]; // returns array of deleted item(s) 
//   rest.sort(); // sorted lexicographically, yes?
//   // console.log(first, rest, last);

//   return {
//     first, 
//     middle: rest, 
//     last,
//   }
// }


// bar();              // logs undefined
// var foo = 'hello';

// function bar() {
//   console.log(foo);
// }


let left = 7;
let right = 22;


let array = [1,2,3,4,5];
let [ ...newArray ] = array;

console.log(newArray);
console.log(array);
console.log(newArray === array);