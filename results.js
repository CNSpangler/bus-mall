import { populateItems } from './app.js';

console.log(populateItems());

const results = localStorage.getItem('votes');

document.getElementById('results').textContent = JSON.stringify(results, 0, 2);