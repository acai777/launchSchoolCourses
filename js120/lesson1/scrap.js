let pete = {
  name: 'Pete', 

  printName() {
    console.log(`My name is ${this.name}`);
  },
};

// pete.printName();
// console.log(pete.printName);

function createCar(make, fuelLevel, engineOn) {
  let carObj = {
    make: make, 
    fuelLevel: fuelLevel, 
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= 0.1;
    },

    stopEngine() {
      this.engineOn = false;
    }, 

    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  }

  return carObj;
};

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();

let raceCarOwn = createCar('Jaguar', 0.4, false);

////////////////////////////////////////////////
// PRACTICE PROBLEMS
///////////////////////////////////////////////











