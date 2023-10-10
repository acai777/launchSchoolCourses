function hah() {}  

function test() {
  console.log(this); 
}

hah.test = test; 

hah.test(); // logs the `hah` function
test(); // logs the `global` object