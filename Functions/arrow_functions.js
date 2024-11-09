/*  Arrow Functions */

// An arrow function is a more concise way to write function expressions in JavaScript. 

// Arrow functions not hoisted i.e. behaves like function expression.

// useful for one line functions and for functions that do not need their own 'this' context.

/* Note:  */

// - We can not use this keyword inside arrow functions.

// - return keyword is not necessory inside arrow functions.

// - If fat arrow function has 1 statement then we can eleminate curly braces and return keyword both.



// Single line arrow function

// const add = (a,b) => a+b;
// console.log(add(2,4))

// Regular function vs Arrow function

// Regular Function

const multiply = function(a,b){
    return a*b;
}


// Arrow Function

const multiplyArrow = (a,b) => a*b;

console.log(multiplyArrow(4,5));







