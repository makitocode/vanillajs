const arrObj1 = [
    { id: "1", name: "Miguel", lastName: "Gonzalez"},
    { id: "2", name: "Suad", lastName: "Fonseca" },
    { id: "3", name: "Arturo", lastName: "Vidal"}
]

//{ id: '1', name: 'Miguel', lastName: 'Gonzalez' }
const result = arrObj1.find((user) => {
    if (user.id < 2)
        return {
            NombreCompleto: `${user.name} ${user.lastName}`
        }
})

//[ { NombreCompleto: 'Miguel Gonzalez' }, undefined, undefined ]
const result2 = arrObj1.map((user) => {
    if (user.id < 2)
        return {
            NombreCompleto: `${user.name} ${user.lastName}`
        }
})

//[ { NombreCompleto: 'Miguel Gonzalez' } ]
const result3 = arrObj1.reduce((accum, el, index) => {
    //console.log(index);
    if (el.id < 2) {
        accum.push(
            {
                NombreCompleto: `${el.name} ${el.lastName}`
            });
    }
    return accum;
}, []);

// console.log(result);
// console.log(result2);
// console.log(result3);

const services = [
    { id: "1", name: "HBO", type: "Addon", package: true},
    { id: "2", name: "Netflix", type: "Addon", package: true },
    { id: "3", name: "STB", type: "Hardware", package: false, installment: [{id:1, name:"oneShoot"}]}
]

const servicesToSave = services.reduce((accum, el, index) => {
    const serv = {
        displayName: el.name,
        package: el.package
    }
    if (el.type == "Hardware")
        serv.installment = el.installment
    accum.push(serv);
    return accum
}, []);
//console.log(JSON.stringify(servicesToSave));
//[{"displayName":"HBO","package":true},{"displayName":"Netflix","package":true},{"displayName":"STB","package":false,"installment":[{"id":1,"name":"oneShoot"}]}]


/**
 * Select First Element of an array
 */

const arr1 = [{ id: 1 , name: "uno" },{ id: 99, name: "dos" }, { id: 99, name: "tres" }];
console.log([].slice(0, 1)); //[]
console.log([].sort((a,b) => a - b).find((el, index) => index == 0));//undefined
console.log([].sort((a, b) => a - b).slice(0, 1));// []

console.log(arr1.slice(0, 1));
//[ { id: 1, name: 'uno' } ]
console.log(arr1.sort((a, b) => a - b).find((el, index) => index == 0));
//{ id: 1, name: 'uno' }
console.log(arr1.sort((a, b) => a - b).filter((el, index) => index == 0));
//[ { id: 1, name: 'uno' } ]
console.log(arr1.sort((a, b) => a - b).slice(0, 1));
//[ { id: 1, name: 'uno' } ]

console.log('------------------ GreatMinds examples -----------------');
const oldCustomizations = [
    { componentId: 1, content: '1 Loremp Ipsum Dolor 1' },
    { componentId: 2, content: '2 Loremp Ipsum Dolor 2' }
]
const currentCustomizations = [
    { componentId: 3, content: '3 Loremp Ipsum Dolor 3'}
]
const customizationsToSave = oldCustomizations.reduce((accum, el, index) => {
    const exists = currentCustomizations.find(cust => cust.componentId === el.componentId);
    console.log(exists);
    if (exists) {
        accum.push(exists);
    } else {
        accum.push(el);    
    } 
    return accum;
}, []);

console.log(customizationsToSave);

// let intersection = currentCustomizations.filter(current => oldCustomizations.findIndex(old => old.componentId === current.componentId) > -1);
// console.log(intersection);
// if (intersection.length <= 0) {
//     //If both arrays are different
//     const unifyCustomizations = [ ...oldCustomizations, ...currentCustomizations ]
//     console.log(unifyCustomizations);
// } else {
//     //.......... falta esto.
//     console.log(intersection);

    
// }

