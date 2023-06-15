/*
- Any topics you want to cover? Any thing you've struggled with this week?

  - language precision
    - right level of detail

  - object creation patterns

  - invoking super-type constructor functions
  - OOP skeletal design
    - mix-ins, when to use?
    - OOP design decisions

*/

/*
Create an OOP skeletal design based on these requirements. You can use any object creation pattern. Think carefully about the relationships being created between the types and try to aim for the least amount of repetition possible. There are several correct answers.

We have a role-playing game that features several mythical creatures and other types of enemies:

- We have Horses that can gallop.
    - A Pegasus is a type of Horse that can gallop and fly.
    - A Unicorn is a type of Horse that can gallop, and pierce.
        - Unicorns are known to be very rare. We should have a method defined somewhere in our code that lets us know how many unicorns have ever been created.

- We have Humans that can speak.

- A Centaur is a creature that has a torso of a man, and the legs of a horse. They can speak and gallop. They also have the ability to slash with their swords.
*/

/*
*/

let speakMixin = {
  speak() {
    console.log("Speak");
  }
}

let gallopMixin = {
  gallop() {
    console.log("Gallop");
  }
}

class Human {
  constructor() {

  }
}

Object.assign(Human.prototype, speakMixin);

class Centaur {
  constructor() {

  }

  slash() {
    console.log("Slashed with my sword");
  }
}

Object.assign(Centaur.prototype, speakMixin);
Object.assign(Centaur.prototype, gallopMixin);

class Horse {
  constructor() {

  }
}

Object.assign(Horse.prototype, gallopMixin);

class Pegasus extends Horse {
  constructor() {

  }

  fly() {
    console.log("Fly");
  }
}

class Unicorn extends Horse {
  constructor () {
    super();
    Unicorn.addUnicorn();
  }

  pierce() {
    console.log("Pierce");
  }

  static numberOfUnicorns = 0;

  static addUnicorn() {
    Unicorn.numberOfUnicorns += 1; 
  }
  
  static getNumberOfUnicorns() {
    return Unicorn.numberOfUnicorns;
  }
}

let john = new Unicorn();
console.log(Unicorn.numberOfUnicorns);

// be careful with what the question is asking you to do exactly. 
// take the class approach and convert to factor functions/OLOO.

// last question for JS 129 assessment is a coding challenge, btw. CODING CHALLENGE. Dang. 