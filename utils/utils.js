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
    const newItemsArray = originalItemsArray.slice();
    const randomItemIndex = Math.floor(Math.random() * newItemsArray.length);
    return originalItemsArray[randomItemIndex];
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}