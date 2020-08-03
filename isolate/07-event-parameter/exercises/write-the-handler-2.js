'use strict';


const headerEl = document.createElement('h1');
headerEl.type = 'checkbox';
console.log('initial header:', headerEl.cloneNode(true));


const changeHeaderTextHandler = (event) => {
  // take input from a user and set it as the target's innerHTML

const newInput = prompt('new input');
if (newInput === null) {
    return;
  }

  const target = event.target;
  target.innerHTML = newInput;
};

headerEl.addEventListener('click', changeHeaderTextHandler);


// "click" the button once
const clickEvent1 = new Event('click');
headerEl.dispatchEvent(clickEvent1);
console.log('after 1st click:', headerEl.cloneNode(true));

// "click" the button again
const clickEvent2 = new Event('click');
headerEl.dispatchEvent(clickEvent2);
console.log('after 2nd click:', headerEl.cloneNode(true));
