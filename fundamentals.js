'use strict'

function PassingValueByReference(){
    console.log(':::::: Passing Value by reference ::::::')

    console.log('-----------');
    console.log('::: object');
    let x = {p:1};
    console.log('x -> ', x);
    let y = x;
    console.log('let y = x');
    console.log('y -> ', y);
    x.p = 2;
    console.log('x.p = 2');
    console.log('result y.p ->', y.p);


    console.log('-----------');
    console.log('::: array');
    let c = [1,2,3];
    console.log('c -> ', c);
    let d = c;
    console.log('let d = c');
    console.log('d -> ', d);
    c[1] = 5;
    console.log('c[1] = 5')
    console.log('result d ->', d);
}

function PassingValueByValue(){
    console.log(':::::: Passing Value by value ::::::')

    console.log('-----------');
    console.log('::: value-variable');
    let a = 5;
    console.log('a -> ', a);
    let b = a;
    console.log('let b = a');
    console.log('b -> ', b)
    a = 1;
    console.log('a = 1')
    console.log('result b ->', b);
}


//Test Passing value by reference - OBJECT
PassingValueByReference();
PassingValueByValue();
// export { PassingValueByReference, PassingValueByValue}