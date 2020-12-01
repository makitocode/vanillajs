// /// Prueba de Promise.all para verificar qué sucede 
// //cuando una de las promesas del array falla
const condition1 = true;
const condition2 = false;
const condition3 = true;
const promise1 = () => new Promise(resolve => setTimeout(resolve, 200, 'p1'));
const promise2 = () => new Promise(resolve => setTimeout(resolve, 200, 'p2'));
const promise3 = () => new Promise(reject => reject('Error en la promesa 3'));

Promise.all(([
  promise1(),
  promise2(),
  promise3(),
])).then(([var1, var2, var3]) => {
  const returnObj = {
    var1,
    var2,
    var3,
  };
//   console.log(returnObj);
//   console.log(`Conslusión, espera a q todas las promesas finalicen, no importa si estas fallan`);
})


const services2Delete = [
    { id: 1, mood: 'direct', basic: true },
    // { id: 2, mood: 'direct', basic: false },
    // { id: 3, mood: 'direct', basic: false }
];


const servicesIndexed = services2Delete.reduce((acc, el, index) => (
    {
        ...acc,
        [index]: el
    }
), {});
// console.log(servicesIndexed);
const activeServices = [
    { id: 1, mood: 'direct', basic: true },
    { id: 2, mood: 'direct', basic: false },
].find(x => !x.basic)
const basicService2del = services2Delete.find(x => x.basic);

console.log('more services ?');
console.log(activeServices)
console.log('basic service to delete ?');
console.log(basicService2del)
if (activeServices && basicService2del) {
    console.log('Debes eliminar otros servicios antes de removerl el básico.');
} else {
    console.log('Puedes eliminar servicios sin problemas');
}

const arrayProm = services2Delete.map(srv =>
    srv.mood === 'direct' ? Promise.resolve('ok') :
        Promise.reject('No se puede eliminar')
);
//console.log(arrayProm);

// Promise.all(arrayProm).then(deleted => {
//     console.log(JSON.stringify(deleted))
// }).catch(er => console.log(er));

const servicesRemoved = Promise.allSettled(arrayProm).then(results =>
    //console.log(JSON.stringify(results))
    // return results.filter((x, idx) => {
    //     if (x.status === 'rejected')
    //         return services[idx]
    // });
    
    services2Delete.filter((el, idx) => results[idx].status == 'rejected')
    
).then(removed =>
    console.log(removed)
).catch(er => console.log(er));
