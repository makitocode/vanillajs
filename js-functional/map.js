
/**
 * The map method transforms an array by applying 
 * a function to all of its elements and building 
 * a new array from the returned values. The new 
 * array will have the same length as the input 
 * array, but its content will have been mapped to 
 * a new form by the function.
 */


const numbers = [1, 2, 3, 4, 5]
const multiplyBy2 = numbers.map(el => el * 2);
console.log(multiplyBy2);

const arrayPar = numbers.map(el => [el, el]);
console.log(arrayPar);

const pets = [
    { name: 'Fito', age: 11, type: 'dog' },
    { name: 'Emiliano', age: 5, type: 'dog' },
    { name: 'Jerónimo', age: 10, type: 'dog' },
    { name: 'Lilo', age: 6, type: 'cat' }
];
//Get age average
const ages = pets.map(el => el.age);
const ageAdd = ages.reduce((accum, curEl) => accum + curEl, 0);
console.log(ageAdd/ages.length);