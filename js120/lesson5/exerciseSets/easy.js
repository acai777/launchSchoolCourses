// function RectangleConstructor(width, length) {
//   this.width = width;
//   this.length = length; 
// }

// Rectangle.prototype.getWidth = function() {
//   return this.width;
// }

// Rectangle.prototype.getLength = function() {
//   return this.length;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// }

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length; 
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }
// }

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype); 
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, furColor) {
//     super(name, age);
//     this.furColor = furColor
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.furColor} fur.`
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, "cat", status);
//   }

//   introduce() {
//     return `${super.introduce()} Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "dog", status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// class Vehicle {
//   constructor(make, model) {
//     this.make = make; 
//     this.model = model;
//   }

//   getWheels() {}

//   info() {
//     return `${this.make} ${this.model}`; 
//   }
// }

// class Car extends Vehicle {
//   getWheels() {
//     return 4;
//   }
// }

// class Motorcycle extends Vehicle {
//   getWheels() {
//     return 2;
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model);
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }
// }

// console.log(Truck.constructor.name);


// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }


// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase());
//   }
// }

// let person = new Person(); 
// let shouter = new Shouter(); 

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// walk() {
//   return `${this.name} ${this.gait()} forward`;
// }

// let walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// Object.assign(Person.prototype, walkMixin);

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// Object.assign(Cat.prototype, walkMixin);

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }

// Object.assign(Cheetah.prototype, walkMixin);

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// class Pet {
//   constructor(type, name) {
//     this.type = type;
//     this.name = name;
//   }

//   getType() {
//     return this.type;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Owner {
//   constructor(name, numPets = 0) {
//     this.name = name;
//     this.numPets = numPets;
//   }

//   addPetCount() {
//     this.numPets += 1;
//   }

//   getName() {
//     return this.name;
//   }

//   numberOfPets() {
//     return this.numPets;
//   }
// }

// class Shelter {
//   constructor(listofAdoptions = {}) {
//     this.listofAdoptions = listofAdoptions;
//   }

//   adopt(ownerObj, petObj) {
//     let ownerName = ownerObj.getName();
//     this.listofAdoptions[ownerName] = this.listofAdoptions[ownerName] || []; 
//     this.listofAdoptions[ownerName].push(petObj);
//     ownerObj.addPetCount();
//   }

//   printAdoptions() {
//     let ownerNames = Object.keys(this.listofAdoptions);
//     ownerNames.forEach(owner => {
//       console.log(`${owner} has adopted the following pets:`);
//       this.listofAdoptions[owner].forEach(petObj => {
//         console.log(`a ${petObj.getType()} named ${petObj.getName()}`);
//       });
//     console.log();
//     });
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

class Banner {
  constructor(message) {
    this.message = message; 
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${"-".repeat(this.message.length)}-+`;
  }

  emptyLine() {
    return `| ${" ".repeat(this.message.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();

let banner2 = new Banner('');
banner2.displayBanner();















