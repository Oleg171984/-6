function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log(`Елемент ${item} не знайдено в масиві.`); 
    }
    return array;
}

const array = [1, 3, 4, 6, 2, 5, 7];
console.log(array); 
removeElement(array, 5);

console.log(array); 
