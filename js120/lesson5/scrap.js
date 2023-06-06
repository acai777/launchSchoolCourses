function subtract(obj) {
  obj.money -= 1; 
}

let obj = {money:5};
console.log(obj);
subtract(obj);
console.log(obj);