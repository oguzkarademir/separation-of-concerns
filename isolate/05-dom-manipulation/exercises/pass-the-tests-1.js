'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p> // replace
  <section></section> // insert before
  <h1><h1> // remove
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---

const nav = document.createElement('nav');
divEl.replaceChild(nav, divEl.children[0]);
divEl.insertBefore(divEl.children[2], divEl.children[1]);
divEl.removeChild(divEl.children[3]);
const newP = document.createElement('p');
divEl.appendChild(newP);

// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4,
  'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV',
  'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H1',
  'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION',
  'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P',
  'Test: 4th child');
