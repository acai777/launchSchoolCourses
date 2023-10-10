document.addEventListener('DOMContentLoaded', () => {
  let ul = document.querySelector('#team ul') // descendant selector

  // Event Delegation
  ul.addEventListener('click', e => {

    if (e.target.tagName === 'A') {
      document.createElement('dialog');
    }

  });




});