function display(event) {
  let tbody = document.querySelector('table tbody');
  let tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${event.type}</td>
    <td>${event.key}</td>
    <td>${event.shiftKey}</td>
    <td>${event.altKey}</td>
    <td>${event.ctrlKey}</td>
    <td>${event.metaKey}</td>
  `;
  
  tbody.appendChild(tr);
  document.body.scrollTop = document.body.scrollHeight;
}

document.addEventListener('keydown', display);
document.addEventListener('keyup', display);

document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('#clear');
  button.addEventListener('click', () => {
    let tbody = document.querySelector('table tbody');
    tbody.innerHTML = '';
  });
});



// Works 
document.addEventListener('mousemove', event => {
  let xPosition = String(event.clientX);
  let yPosition = String(event.clientY); 
  
  // Change positions 
  let x = document.querySelector(".x");
  
  x.style.left = xPosition + "px";
  x.style.top = yPosition + "px"; 
});

document.addEventListener("keyup", event => {
  let horizontalDiv = document.querySelector(".horizontal");
  let verticalDiv = document.querySelector(".vertical");
  
  if (event.key === 'b') {
    horizontalDiv.style.background = 'blue';
    verticalDiv.style.background = 'blue';
  } else if (event.key === 'g') {
    horizontalDiv.style.background = 'green';
    verticalDiv.style.background = 'green';  
  } else if (event.key === 'r') {
    horizontalDiv.style.background = 'red';
    verticalDiv.style.background = 'red';  
  }
});

/*
Say have 140 characters. If go over, change text size to become red. 

"X characters remaining". Seem to alter the paragraph tag with the class "counter"
*/

// YOUR ATTEMPT (doesn't work in the reverse direction i.e., deleting keys)
let paragraph = document.querySelector(".counter");
paragraph.textContent = "140 characters remaining."

document.addEventListener("keyup", event => {
  let paragraph = document.querySelector(".counter");
  let counter = +paragraph.textContent.match(/-?\d+/g) || 0;
    // will automatically convert white space to 0, if not initialized to a number already 
  
  counter = counter - 1; 
  paragraph.textContent = `${counter} characters remaining.`
  
  if (counter < 0 && !document.querySelector(".composer textarea").classList.contains("invalid") ) {
    document.querySelector(".composer textarea").classList.add("invalid"); 
  }
});

// SUGGESTION SOLUTION
document.addEventListener('DOMContentLoaded', () => {
  let composer = document.querySelector('.composer');
  let textarea = composer.querySelector('textarea');
  let counter = composer.querySelector('.counter');
  let button = composer.querySelector('button');
  
  function updateCounter() {
    let length = textarea.value.length;
    let remaining = 140 - length;
    let message = `${remaining.toString()} characters remaining`;
    let invalid = remaining < 0;
    
    textarea.classList.toggle('invalid', invalid);
    button.disabled = invalid;

    counter.textContent = message;    
  }
  
  textarea.addEventListener('keyup', updateCounter);
  
  updateCounter();
});






/*
For the "Capturing and Bubbling (1)" page, problem 2. 
d1 pick DIV
d2 pick MAIN
d4 pick SECTION 

If you add the line code, output will be:
d1 pick DIV
d2 pick MAIN
d4 pick SECTION 
d3 DIV

/////////////////////////////////////
"Capturing and Bubbling (2)" page....

Problem 1 


*/
