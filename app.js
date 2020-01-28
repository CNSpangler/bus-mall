import { originalItemsArray } from './data/itemArray.js';
import { getRandomItem } from './utils/utils.js';

const newItemsArray = originalItemsArray.slice();

// // values of radio buttons
// const optionOne = document.getElementById('option-one');
// const optionTwo = document.getElementById('option-two');
// const optionThree = document.getElementById('option-three');

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

function populateItems() {
    const randomItemOne = getRandomItem(newItemsArray);
    imageOne.src = randomItemOne.image;
    descriptionOne.textContent = randomItemOne.name;

    const randomItemTwo = getRandomItem(newItemsArray);
    if (randomItemTwo !== randomItemOne) {
        imageTwo.src = randomItemTwo.image;
        descriptionTwo.textContent = randomItemTwo.name;
    }

    const randomItemThree = getRandomItem(newItemsArray);
    if ((randomItemThree !== randomItemTwo) && (randomItemThree !== randomItemOne)) {
        imageThree.src = randomItemThree.image;
        descriptionThree.textContent = randomItemThree.name;
    }
}

populateItems();