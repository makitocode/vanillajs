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
console.log([].slice(0, 1));
console.log([].sort((a,b) => a - b).find(el => el));
