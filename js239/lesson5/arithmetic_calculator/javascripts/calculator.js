document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let first;
  let second; 
  let operator;
  let h1 = document.getElementById('result');
  let result;

  form.addEventListener('submit', e => {
    e.preventDefault(); 
    first = +document.querySelector('#first-number').value;
    second = +document.querySelector('#second-number').value;
    operator = document.querySelector('#operator').value;

    console.log(first, operator, second)

    switch (operator) {
      case '+':
        result = first + second; 
        break;
      case '-':
        result = first - second; 
        break;
      case '*':
        result = first * second; 
        break;
      case '/':
        result = first / second;
        break;
    }

    h1.innerHTML = String(result); 
  });



});