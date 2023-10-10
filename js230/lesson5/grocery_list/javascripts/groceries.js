const DEFAULT_AMOUNT = '1'; 

document.addEventListener('DOMContentLoaded', () => {
  let name;
  let quantity; 
  let form = document.querySelector('form');
  let ul = document.querySelector('#grocery-list');

  form.addEventListener('submit', e => {
    e.preventDefault(); 
    name = document.querySelector('#name').value;
    quantity = document.querySelector('#quantity').value;

    if (!name) {
      alert('You must enter a grocery.');
      return;
    }

    if (quantity == "") {
      quantity = DEFAULT_AMOUNT;
    }

    ul.appendChild(createListItem(name, quantity));
    form.reset();
  });

});

function createListItem(name, quantity) {
  let li = document.createElement('li');
  li.textContent = `${quantity} ${name}`; 
  return li; 
}




