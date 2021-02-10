/**
 * It builds a value by repeatedly taking a 
 * single element from the array and combining 
 * it with the current value. When summing numbers, 
 * you’d start with the number zero and, for each 
 * element, add that to the sum.
 * 
 * The parameters to reduce are, apart from the 
 * array, a combining function and a start value.
 */


const pets = [
    { name: 'Fito', age: 11, type: 'dog' },
    { name: 'Emiliano', age: 5, type: 'dog' },
    { name: 'Jero', age: 10, type: 'dog' },
    { name: 'Lilo', age: 6, type: 'cat' }
];
//get total ages
const totalAges = pets.reduce((accum, curEl) => accum + curEl.age, 0);
//console.log(totalAges);


//Also, reduce is a great Solution 
//when we have filter a collection 
//with other collection.
const filterPet = [
    { name: 'Julieta' },
    //{ name: 'Jero'}
]
const el = pets.filter(pet =>
    filterPet.find(fil => pet.name === fil.name)
);
console.log([...filterPet, ...el.map((item)=> item.name = 'New Name')]);

// //Indexed an array
// const indexed = pets.reduce((accum, el) => ({
//     ...accum,
//     [el.name]: el
// }), {});
// //console.log(indexed['Lilo']);
// //console.log(indexed['Fito']);
// //How to filter using indexed dictionary and filter array obj
// //console.log(filterPet.filter( p => indexed[p.name]));
// console.log( filterPet.map(el => indexed[el.name]) );

// let str = "puzzle";
// let res = str.split('');
// //console.log(res)



// //Reduce with empty list
// const installment = null;

// try {
//     if(installment.installmentInfo){
//         let response = installment.installmentInfo?.reduce(
//             (accum, currentVal) =>
//               accum.noOfInstallments > currentVal.noOfInstallments ? accum : currentVal
//         );
//         console.log(response);
//     }
        
// } catch (error) {
//     console.log(error);
// }
