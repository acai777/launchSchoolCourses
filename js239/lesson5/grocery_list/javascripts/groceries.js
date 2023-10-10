document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let list = document.querySelector('#grocery-list');
  let item; 
  let quantity;
  form.addEventListener('submit', e => {
    e.preventDefault();
    item = document.querySelector('#name').value; 
    quantity = document.querySelector('#quantity').value; 

    if (quantity === '') quantity = '1';

    let li = document.createElement('li');
    li.textContent = `${quantity} ${item}`;
    list.append(li); 
    
    form.reset();
  });


});