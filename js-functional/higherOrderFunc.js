/**
 * Math concept.
 *      f(x)
 *            ==> h(f,g)    ==> j(h)
 *      g(x)
 * 
 * Higher order functions are functions that operate
 * on other functions, either by taking them as 
 * arguments or by returning them. In simple words, 
 * A Higher-Order function is a function that receives
 * a function as an argument or returns the function 
 * as output.
 * 
 */

console.log();
console.log(':::::: First example')
function createEmail(provider) {
    return function (userName) {
        return `${userName}@${provider}.com`;
    }
}
const glbntGmail = createEmail('gmail')('miguel.gr');
const glbntOutlook = createEmail('outlook');
//const miguel_gr_g = glbntGmail('miguel.gr');
const miguel_gr_o = glbntOutlook('miguel.gr');
console.log(glbntGmail);
console.log(miguel_gr_o);
// → miguel.gr@gmail.com
// → miguel.gr@outlook.com



console.log();
console.log(':::::: Second example: functions that create new functions.')
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true



console.log();
console.log(':::::: Third example: functions that change other functions.')
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1