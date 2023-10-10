/*
General process:

-Have an event listener for when the user submits the form.
-grab the inputs 
-validate that they are indeed numbers (nothing empty, no letters, etc). Can use RegExp...!
-grab the selector selected

-do conditionals to see which operator was chosen.
-generate result based on which operator was used 

populate the h1 tag's textContent with the result. Done. 
*/

document.addEventListener('DOMContentLoaded', () => {
  //let submitBtn = document.querySelector('input[type=submit]');

  let form = document.querySelector('form');
  let h1 = document.querySelector('h1');
  let firstNum;
  let secondNum; 
  let operator; 
  let result; 

  form.addEventListener('submit', e => {
    e.preventDefault();
    firstNum = +form.querySelector('#first-number').value;
    secondNum = +form.querySelector('#second-number').value;
    operator = form.querySelector('select').value; 

    switch (operator) {
      case '+':
        result = firstNum + secondNum; 
        break;
      case '-':
        result = firstNum - secondNum; 
        break;
      case '*':
        result = firstNum * secondNum; 
        break;
      case '/':
        result = firstNum / secondNum;
        break;
    }

    h1.textContent = result; 
    
  });

});