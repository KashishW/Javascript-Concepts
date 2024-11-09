/* Hoisting

Hoisting is a javascript mechanism where variables and function declaration are moved to the top of their scope during the compilation phase
i.e we can use functions and variables before they are declared in the code.

- In case of var
    Variables declared with var are hoisted to the top of their scope means we can use the variable before its declaration 
    without getting an error. (though it will be undefined until the declaration is encountered)

- In case of let and const
    Variables declared with let and const are hoisted but not initialized. Accessing them before the declaration results in 'Reference Error'.
    i.e Hoisting never works for let and const.

 */

// Hoisting with var

/* console.log(x);  // undefined

var x = 5;

console.log(x); // 5 */



/* // Hoisting with let and const

console.log(y);  // Reference Error: cannot access y before initialization
let y = 10; */


/* console.log(z);  // Reference Error: cannot access z before initialization
const z = 10; */








