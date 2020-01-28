import { originalItemsArray } from '../data/itemArray.js';

export function getItems() {
    return originalItemsArray;
}

export function getItemById(someId) {
    let itemMatch;

    originalItemsArray.forEach((item) => {
        if (someId === item.id) {
            itemMatch = item;
        }
    });
    return itemMatch;
}

export function getRandomItem() {
    const randomItemIndex = Math.floor(Math.random() * originalItemsArray.length);
    return originalItemsArray[randomItemIndex];
}