// myBind
function myBind1(fcn, contextObj) {
  return function() {
    return fcn.apply(contextObj);
  }
}

// myBind improved 
function myBind2(fcn, contextObj, ...arg1) {
  return function(...arg2) {
    let combinedArg = [...arg1, ...arg2];
    return fcn.apply(contextObj, combinedArg);
  }
}
function addNumbers(a, b) {
  return a + b;
}

// Make a stack 
function newStack() {
  let stack = []; 

  return {
    push(elt) {
      stack.push(elt);
    },

    pop() {
      if (stack.length !== 0) {
        return stack.pop();
      } else {
        console.log("The stack is empty.");
      }
    },

    printStack() {
      stack.forEach(elt => console.log(elt)); 
    },
  }
}

// Delegate 
function delegate(obj, method, ...args) {
  return function() {
    return obj[method](...args);
  }
}

// Anonymizer 
// let __firstAttemptAccount = {
//   init(email, password, firstName, lastName) {
//     this.email = email; 
//     this.password = password;
//     this.firstName = firstName; 
//     this.lastName = lastName;

//     this.displayName;  // need to change
//     return this; 
//   },

//   reanonymize(passwordAttempt) {
//     if (this.password === passwordAttempt) {
//       // reanonymize somehow. Need to change. 
//       return true;
//     } else {
//       return 'Invalid Password';
//     }
//   },

//   resetPassword(currPassword, newPassword) {
//     if (this.password === currPassword) {
//       this.password = newPassword; 
//       return true;
//     } else {
//       return 'Invalid Password';
//     }
//   },

//   firstName(passwordAttempt) {
//     if (this.password === passwordAttempt) {
//       return this.firstName;
//     } else {
//       return 'Invalid Password';
//     }
//   },

//   lastName(passwordAttempt) {
//     if (this.password === passwordAttempt) {
//       return this.lastName;
//     } else {
//       return 'Invalid Password';
//     }
//   },

//   email(passwordAttempt) {
//     if (this.password === passwordAttempt) {
//       return this.email;
//     } else {
//       return 'Invalid Password';
//     }
//   },

//   displayName() {
//     return this.displayName;
//   }
// };


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// let Account = {
//   init(email, password, firstName, lastName) {
//     const CHARACTERS = ['abcdefghijklmnopqrstuvwxyz0123456789'];
//     const SEQUENCE_LENGTH = 16;
//     let newdisplayName = '';
//     for (let index = 0; index < SEQUENCE_LENGTH; index += 1) {
//       newdisplayName += newdisplayName + CHARACTERS[Math.floor((Math.random() * CHARACTERS.length))];
//     }
//     this.displayName = newdisplayName;

//     this.reanonymize = function(passwordAttempt) {
//       const CHARACTERS = ['abcdefghijklmnopqrstuvwxyz0123456789'];
//       const SEQUENCE_LENGTH = 16;
//       if (password === passwordAttempt) {
//         let newdisplayName = '';
//         for (let index = 0; index < SEQUENCE_LENGTH; index += 1) {
//           newdisplayName += newdisplayName + CHARACTERS[Math.floor((Math.random() * CHARACTERS.length))];
//         }
//         this.displayName = newdisplayName;
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
//     };

//     this.resetPassword = function(currPassword, newPassword) {
//       if (password === currPassword) {
//         password = newPassword; 
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
//     };
  
//     this.firstName = function firstName(passwordAttempt) {
//       if (password === passwordAttempt) {
//         return firstName;
//       } else {
//         return 'Invalid Password';
//       }
//     };
  
//     this.lastName = function lastName(passwordAttempt) {
//       if (password === passwordAttempt) {
//         return lastName;
//       } else {
//         return 'Invalid Password';
//       }
//     };
  
//     this.email = function email(passwordAttempt) {
//       if (password === passwordAttempt) {
//         return email;
//       } else {
//         return 'Invalid Password';
//       }
//     };

//     return this; 
//   },
// };

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}

// console.log(sum(1, 4, 5, 6)); // 16

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
// logs: Kirk, James T.







