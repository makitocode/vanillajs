/**
 * A pure function produces no side effects, 
 * which means that it can’t alter any external
 * variable object or state.
 */

console.log(':::: PURE FUNCTION ::::');
/**
 * PURE function 
 * Add two numbers
 * @param {first value} a First value
 * @param {number} b Second value
 */
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(2, 3));


console.log(':::: NON-PURE FUNCTIONS ::::');
const a = 10;
const b = 5;
/**
 * Non-PURE function
 * Add two previously defined numbers
 */
function nonPureAdd1() {
    return a + b;
}
console.log(nonPureAdd1());

let result = 0;
/**
 * Non-PURE function
 * add two numbers and 
 * set the result in a previously defined variable
 */
function nonPureAdd2(a, b) {
    result = a + b;
}
nonPureAdd2(3, 4);
console.log(result);