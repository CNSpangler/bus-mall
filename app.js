import { getRandomItem, findById } from './utils/utils.js';

// IDs for where radio button images go
const imageOne = document.getElementById('item-img-one');
const imageTwo = document.getElementById('item-img-two');
const imageThree = document.getElementById('item-img-three');

// IDs for spans where item descriptions go
const descriptionOne = document.getElementById('item-description-one');
const descriptionTwo = document.getElementById('item-description-two');
const descriptionThree = document.getElementById('item-description-three');

// values of radio buttons
let optionOne = document.getElementById('option-one');
let optionTwo = document.getElementById('option-two');
let optionThree = document.getElementById('option-three');

// let votes;
// let displays;
let clicksLeft;
let resultsArray;

function initializeState() {
    clicksLeft = 25;
    resultsArray = [];
}

function populateItems() {
// somehow compare new items to threeItemsArray

    const randomItemOne = getRandomItem();
    imageOne.src = randomItemOne.image;
    descriptionOne.textContent = randomItemOne.name;
    optionOne.value = randomItemOne.id;

    let randomItemTwo = getRandomItem();
    if (randomItemTwo !== randomItemOne) {
        imageTwo.src = randomItemTwo.image;
        descriptionTwo.textContent = randomItemTwo.name;
        optionTwo.value = randomItemTwo.id;
    } else {
        while (randomItemTwo === randomItemOne) {
            randomItemTwo = getRandomItem();
        }
        imageTwo.src = randomItemTwo.image;
        descriptionTwo.textContent = randomItemTwo.name;
        optionTwo.value = randomItemTwo.id;
    }

    let randomItemThree = getRandomItem();
    if (randomItemThree !== randomItemTwo && randomItemThree !== randomItemOne) {
        imageThree.src = randomItemThree.image;
        descriptionThree.textContent = randomItemThree.name;
        optionThree.value = randomItemThree.id;
    } else {
        while (randomItemThree === randomItemTwo || randomItemThree === randomItemOne) {
            randomItemThree = getRandomItem();
        }
        imageThree.src = randomItemThree.image;
        descriptionThree.textContent = randomItemThree.name;
        optionThree.value = randomItemThree.id;
    } 

    // let threeItemsArray = [randomItemOne, randomItemTwo, randomItemThree];
    // console.log(threeItemsArray);
    // return threeItemsArray;
}

initializeState();
populateItems();

// event listener on Vote button

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userInput = new FormData(form);
    const upvotedItem = userInput.get('item-choice');
    clicksLeft--;
    const itemInResultsArray = findById(resultsArray, upvotedItem);
    if (itemInResultsArray) {
        itemInResultsArray.votes++;
    } else {
        const newResultObject = {
            id: upvotedItem,
            votes: 1
        };
        resultsArray.push(newResultObject);

        localStorage.setItem('BusMall Results', JSON.stringify(resultsArray));

        if (clicksLeft === 0) {
            window.location = 'results/index.html';
            return clicksLeft;
        }
    }
    populateItems();
});