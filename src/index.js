// Call functions from sum.js, then prints the result.

//Common JS
// const sum = require('./sum');

// ES2015
// import sum from './sum';
// import './image_viewer';

// const total = sum(10, 5);
// console.log(total);

// Example 1 - code splitting
const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
