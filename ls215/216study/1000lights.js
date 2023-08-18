/*
10:06pm - 10:41pm 

input: number type, indicates the number of switches
output: array of the lights that are on after n repetitions. 

Rules:
-on the first toggle forward, want to toggle (turn on in this case, since every light is initially off) every switch. 
-on the subsequent round (second pass), we start again FROM THE BEGINNING and toggle 2, 4, 6. 
-on the third round (third pass), we start again from the beginning and toggle switches 3, 6, 9, and so on. 
-We repeat this process for a total of `n` repetitions. There are `n` switches, btw. 
-keep in mind that JS is 0-indexed, but the switches are 1-indexed. 


Questions:
-0 as input? negative number as input? How do we handle those? 
ASSUME ALL NUMBERS >= 1
-Can we expect to potentially receive non-number types as input? If so, how to handle?
ASSUME ONLY RECEIVE NUMBER INPUT

0 indicates light is off. 
1 indicates light is on.
lightsOn(5);

[0, 0, 0, 0, 0] // round 0
[1, 1, 1, 1, 1] // round 1. toggle every switch
[1, 0, 1, 0, 1] // round 2. toggle 2, 4
[1, 0, 0, 0, 1] // round 3. toggle 3
[1, 0, 0, 1, 1] // round 4. toggle switch 4
[1, 0, 0, 1, 0] // round 5. toggle switch 5.

return switch 1 and switch 4 i.e., return [1, 4]

lightsOn(1) 
[0]
[1]
return [1]. index + 1 

lightsOn(2) // return [1]
[0, 0]
[1, 1] // round 1
[1, 0] // round 2

lightsOn(0) // return [];
lightsOn(-1) // return [];


lightsOn(5); // return [1, 4]
lightsOn(0) // return [];
lightsOn(-1) // return [];
lightsOn(100); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
lightsOn(2) // return [1]

Data structure: array. Array [0s or 1s]

ALGORITHM:
-Initialize an array of n elements of zeros called `switchesArr`. Indicates that the lights
are off. 
-For loop: Iterate from 1 to n (to indicate each pass)
  -`getIndicesToToggle` => returns array of indices to toggle `indicies`
  -Inner for loop: for each index element `idx` in `indicies` want to go to `idx` - 1 in `switches`
    - if the current element is 0, replace with value 1. 
    - if current element is 1, replace with value 0.

[1, 0, 0, 1, 0]
get the index position of where there is a 1 element and then add 1 to the index. This will be a switch that is turned on.  


lightsOn(5); 
[0, 0, 0, 0, 0]  [1, 2, 3, 4, 5] round 1
[1, 1, 1, 1, 1]  round 1 
[1, 0, 1, 0, 1] [2, 4] round 2
[1, 0, 0, 0, 1] [3] round 3 
[1, 0, 0, 1, 1] [4] round 4
[1, 0, 0, 1, 0] [5] round 5

index positions: 0, 3 => 1 4 => [1, 4]
*/

function lightsOn(switches) {
  if (switches <= 0) return [];

  let switchesArr = [];

  for (let i = 0; i < switches; i +=1) {
    switchesArr.push(0);
  }

  for (let pass = 1; pass <= switches; pass +=1) {
    let passIndicies = getIndicesToToggle(pass, switches); 

    passIndicies.forEach(indexElt => {
      if (switchesArr[indexElt] === 0) {
        switchesArr[indexElt] = 1;
      } else {
        switchesArr[indexElt] = 0;
      }
    })
  }

  let switchesOn = [];
  switchesArr.forEach((elt, index) => {
    if (elt === 1) {
      switchesOn.push(index + 1);
    }
  });

  return switchesOn; 
}

function getIndicesToToggle(pass, switches) {
  let indicies = [];

  let currIndex = pass; 

  while (true) {
    indicies.push(currIndex - 1); 
    currIndex += pass;

    if (currIndex > switches) break; 
  }

  return indicies;
}

console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []
console.log(lightsOn(-1)); // []
console.log(lightsOn(2)) // [1]

// console.log(getIndicesToToggle(1, 5));
// console.log(getIndicesToToggle(2, 5));
// console.log(getIndicesToToggle(3, 5));
// console.log(getIndicesToToggle(4, 5));
// console.log(getIndicesToToggle(5, 5));