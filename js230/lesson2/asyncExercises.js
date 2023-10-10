// Randomizer 
function randomizer(...callbacks) {
  let n = callbacks.length; 
  let maxSecond = 2 * n; 

  for (let i = 1; i <= maxSecond; i +=1 ) {
    setTimeout(() => console.log(i), i * 1000);
  }


  let randomTimes = callbacks.map(_ => Math.random() * maxSecond);
  callbacks.forEach((callback, ind) => setTimeout(() => callback(), randomTimes[ind] * 1000));
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

// randomizer(callback1, callback2, callback3);


// Reverse Engineer 
// document.querySelector('html').addEventListener('click', (event) => {
//   let currElt = event.target; 
//   if (event.target.id !== "container") {
//     document.querySelector('#container').style = 'display: none';
//   }
// });

// document.querySelector('#container').addEventListener('click', event => {

// });

// Bold Element + Custom 
function makeBold(element, callback) {
  element.style.fontWeight = 'bold';

  if (callback && typeof callback === 'function') {
    callback(element); 
  }
}

// SELECTION FILTERS (correct, your own solution)
let classToAnimals = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
  'Classifications': ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
};

let animalToClasses = {
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
  'Animals': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
};

let classification = document.querySelector('#animal-classifications');
let animals = document.querySelector('#animals');
let button = document.querySelector('#clear');

classification.addEventListener('change', event => {
  let selectedClass = event.currentTarget.value;
  emptyChildren(animals);
  
  classToAnimals[selectedClass].forEach(animal => {
    let option = document.createElement('option')
    option.value = animal; 
    option.textContent = animal;
    animals.appendChild(option);
  });
});

animals.addEventListener('change', event => {
  let selectedAnimal = event.currentTarget.value;
  emptyChildren(classification);
  
  animalToClasses[selectedAnimal].forEach(myClass => {
    let option = document.createElement('option')
    option.value = myClass; 
    option.textContent = myClass; 
    classification.appendChild(option);
  });
});

button.addEventListener('click', event => {
  event.preventDefault();
  emptyChildren(classification);
  emptyChildren(animals);
  
  classToAnimals['Classifications'].forEach(animal => {
    let option = document.createElement('option')
    option.value = animal; 
    option.textContent = animal;
    animals.appendChild(option);
  });
  
  animalToClasses['Animals'].forEach(myClass => {
    let option = document.createElement('option')
    option.value = myClass; 
    option.textContent = myClass; 
    classification.appendChild(option);
  });
});

function emptyChildren(node) {
  while (node.firstElementChild) {
    node.firstElementChild.remove();
  }
}


/*
Process: 

-create two dictionaries. key is the class or animal. value is array containing the animal/class of that group. 
-delete all current options/children of the select tags. 
-add in new options via the dictionaries/objects. 
*/


