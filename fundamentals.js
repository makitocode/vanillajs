'use strict'

//#region PASSING_VALUE_BY_REFERENCE
/**
 * Method to test example of passing value by reference
 */
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

/**
 * Method to test example of passing value by value
 */
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


//Run Test
// PassingValueByReference();
// PassingValueByValue();
//#endregion 

//#region PRIMITIVE_TYPES
console.log('\n');
console.log(':::: Primitive types');
console.log('\n');
/**
 * Method to print some example of primitives values 
 * and get the typeof ofeach of them
 */
function PrintPrimitiveTypes_and_get_typeOf(){
    let a = 2;
    console.log('let a = 2 //number');
    let b = "two";
    console.log('let b = "two" //string');
    let c = true;
    console.log('let c = true //bolean');
    let d = null;
    console.log('let d = null //"object" -> not exactly');
    let e = undefined;
    console.log('let e = undefined //undefined');

    console.log('---- TypeOf ------');
    console.log('typeof a ->', typeof a);
    console.log('typeof b ->', typeof b);
    console.log('typeof c ->', typeof c);
    console.log('typeof d ->', typeof d);
    console.log('typeof e ->', typeof e);
}

/**
 * Method to test new primitive type symbol.
 * Symbol introduce in ES6
 */
function SymbolsforFun(){
    //Instead, just an assignment to Symbol will create a new symbol with a unique ID:
    let sym = Symbol('unique');
    console.log("let sym = Symbol('unique')");
    console.log('sym -> ', sym);
    let obj = {
        [sym]: 1
    }
    console.log('obj -> ', obj);
    console.log('-------------');
    //The ID, however, is not the used-defined string "sym", it is created internally.
    //This is demonstrated in the following example.
    let x = Symbol('sym') === Symbol('sym');
    console.log("let x = Symbol('sym') === Symbol('sym')");
    console.log('result -> ', x);
    console.log('-------------');
    //Symbols can be used whenever you need unique IDs. Hence, they can also be used
    //to create constants in enumerable lists of IDs:
    const seasons = {
        winter: Symbol('winter'),
        spring: Symbol('spring'),
        summer: Symbol('summer'),
        autumn: Symbol('autumn')
    }

    console.log('symbol seasons ', seasons);
}

//run test region
//  PrintPrimitiveTypes_and_get_typeOf();
// console.log('\n');
// SymbolsforFun();
// console.log('\n');
//#endregion

//#region CONTRUCTOR_&_INSTANCE
console.log('\n');
console.log(':::: CONSTRUCTOR & INSTANCE');
console.log('\n');

// Method to create pancake
let Pancake = function() {
    this.number = 0;
    this.bake = function(){
        console.log('Baking the pancake...');
        this.number++;
    }
}


/**
 * Method to create and test instance of pancake.
 */
function Instance(){
    //instantie pancake maker
    let pancake = new Pancake();
    //Bake 3 pancakes
    pancake.bake();
    pancake.bake();
    pancake.bake();

    console.log('number of pancakes -> ', pancake.number);
    console.log('\n');
}

/**
 * Method to get the constructor
 */
function getConstructor(){
    //instantie pancake maker
    let pancake = new Pancake();
    console.log('constructor -> ', pancake.constructor);
    console.log('😱')
    console.log('😏')
    console.log('\n');
}

//Run test
// Instance();
// getConstructor();
//#endregion

//#region SCOPE_&_HOISTING
console.log('\n');
console.log(':::: SCOPE & HOISTING');
console.log('\n');

console.log('---- Global scope ----');
console.log('Hoisting simply means ”raised” or ”placed on top of”.');

//functions
myHoistingFunction(); //works when 'use strict' has disable 😱
// myfunction(); // doesn't work. this is fine 👍🏼

function myHoistingFunction(){
    console.log('myHoistingFunction has been hoisted.');
}
var myfunction = function(){
    console.log('myfunction has been hoisted.');
}

var apple = 1;
console.log("var apple = 1");
let appleII = 2;
console.log("let appleII = 2");

{
    
    // block-scope
    console.log('---- Block scope ----');
    var elisa = 'Macintosh';
    console.log("var elisa = 'Macintosh'");
    let macbook = 'macbook';
    console.log("var macbook = 'macbook'");

    // Here apple is defined in global scope. But it can also be accessed from an inner
    console.log('apple -> ', apple);
    console.log('appleII -> ', appleII);
}
console.log('elisa -> ', elisa);

// console.log('macbook ->', macbook); //throws error macbook is not defined
console.log('\n');
// export { PassingValueByReference, PassingValueByValue}