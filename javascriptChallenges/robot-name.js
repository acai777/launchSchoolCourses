/*
5pm - 540pm (spent some time understanding how seedrandom works)

[P]
Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name. The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it will respond with a new random name.

The names must be random; they should not follow a predictable sequence. Random names means there is a risk of collisions. Your solution should not allow the use of the same name twice.

[E]
Rules:
-Create `Robot` class. 
-Each instance willl get a random name. Randomly generated. Set this as a data point of the robot instance. Is a string type. 
-`name()` instance method should return the name data point. 
- different robots should have dif names. 
- if the chosen name is already taken, find another name. Might imply a static property to keep track of all the taken names. Need to update this property if reset name. 
-`reset()` instance method. Resets name. 

[D/A]
Process:
-Create Robot class 
-create static property `takenNames` which contains all the existing names. Empty array to start.
-constructor function should have one property `myName`. Generated from instance helper method `makeRandomName()`. If name is already taken, try again until get a new name.
  -`makeRandomName()` should be able to return a random name. Use Math.random() to generate 2 random letters, and then 3 random integers. Return as a string. 
`name()` method should just return `this.myName`. 
`reset()` resets `myName` to be something else. Make sure the new name is not already in `takenNames`. Once you identify a new random name, delete the old name and insert the new name into `takenNames`. 
*/
class Robot {
  static TAKEN_NAMES = [];
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor() {
    let newName = this.makeRandomName(); 
    while (Robot.TAKEN_NAMES.includes(newName)) {
      newName = this.makeRandomName();
    }

    Robot.TAKEN_NAMES.push(newName);
    this.myName = newName;
  }

  makeRandomName() {
    let randomName = '';

    randomName += this.randomLetter();
    randomName += this.randomLetter();
    randomName += this.randomNumber();
    randomName += this.randomNumber();
    randomName += this.randomNumber();

    return randomName; 
  }

  randomLetter() {
    let numberOfLetters = Robot.LETTERS.length; 
    let index = Math.floor(Math.random() * numberOfLetters); 
    let randomLetter = Robot.LETTERS[index];

    return randomLetter; 
  }

  randomNumber() {
    return Math.floor(Math.random() * 9);
  }

  name() {
    return this.myName;
  }

  reset() {
    let currentName = this.myName; 

    let newName = this.makeRandomName(); 
    while (Robot.TAKEN_NAMES.includes(newName)) {
      newName = this.makeRandomName();
    }

    Robot.TAKEN_NAMES.push(newName);
    let oldNameIndex = Robot.TAKEN_NAMES.indexOf(currentName);
    Robot.TAKEN_NAMES.splice(oldNameIndex, 1);

    this.myName = newName;

  }
}

module.exports = Robot;



// Math.seedrandom = require('seedrandom');
// Math.seedrandom(1000); // I see. How the seed works is it forces all "random" methods to, well, not be random. That is, repeatedly calling something like Math.random() will generate the SAME number over and over again. 
// console.log(Math.random());

// Math.seedrandom(1000); 
// console.log(Math.random());

// let myRobot = new Robot();