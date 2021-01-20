
const arrObj1 = [
    { id: "1", name: "Miguel", lastName: "Gonzalez"},
    { id: "2", name: "Suad", lastName: "Fonseca" },
    { id: "3", name: "Arturo", lastName: "Vidal"}
]

const result = arrObj1.find((user) => {
    if (user.id < 2)
        return {
            NombreCompleto: `${user.name} ${user.lastName}`
        }
})

const result2 = arrObj1.map((user) => {
    if (user.id < 2)
        return {
            NombreCompleto: `${user.name} ${user.lastName}`
        }
})

const result3 = arrObj1.reduce((accum, el, index) => {
    console.log(index);
    if (el.id < 2) {
        accum.push(
            {
                NombreCompleto: `${el.name} ${el.lastName}`
            });
    }
    return accum;
}, []);

console.log(result);
console.log(result2);
console.log(result3);