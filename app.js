import { originalItemsArray } from './data/itemArray.js';
import { getRandomItem } from './utils/utils.js';

// // IDs for whole radio button labels
// const itemOne = document.getElementById('item-one');
// const itemTwo = document.getElementById('item-two');
// const itemThree = document.getElementById('item-three');

// IDs for where radio button images go
const imageOne = document.getElementById('item-img-one');
const imageTwo = document.getElementById('item-img-two');
const imageThree = document.getElementById('item-img-three');

// IDs for spans where item descriptions go
const descriptionOne = document.getElementById('item-description-one');
const descriptionTwo = document.getElementById('item-description-two');
const descriptionThree = document.getElementById('item-description-three');

// values of radio buttons
let optionOneValue = document.getElementById('option-one');
let optionTwoValue = document.getElementById('option-two');
let optionThreeValue = document.getElementById('option-three');

function populateItems() {
// somehow compare new items to threeItemsArray

    const randomItemOne = getRandomItem();
    imageOne.src = randomItemOne.image;
    descriptionOne.textContent = randomItemOne.name;
    optionOneValue = randomItemOne.value;

    let randomItemTwo = getRandomItem();
    if (randomItemTwo !== randomItemOne) {
        imageTwo.src = randomItemTwo.image;
        descriptionTwo.textContent = randomItemTwo.name;
        optionTwoValue = randomItemTwo.value;
    } else {
        while (randomItemTwo === randomItemOne) {
            randomItemTwo = getRandomItem();
        }
        imageTwo.src = randomItemTwo.image;
        descriptionTwo.textContent = randomItemTwo.name;
        optionTwoValue = randomItemTwo.value;
    }

    let randomItemThree = getRandomItem();
    if (randomItemThree !== randomItemTwo && randomItemThree !== randomItemOne) {
        imageThree.src = randomItemThree.image;
        descriptionThree.textContent = randomItemThree.name;
        optionThreeValue = randomItemThree.value;
    } else {
        while (randomItemThree === randomItemTwo || randomItemThree === randomItemOne) {
            randomItemThree = getRandomItem();
        }
        imageThree.src = randomItemThree.image;
        descriptionThree.textContent = randomItemThree.name;
        optionThreeValue = randomItemThree.value;
    } 
    let threeItemsArray = [randomItemOne, randomItemTwo, randomItemThree]
    return threeItemsArray;
}

populateItems();