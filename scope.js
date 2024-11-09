/* Scope 

- Scope refers to the context in which variables, functions and objects are accessible.

- Types of Scope:
    -- Local Scope   (Accessible inside the function where it is declared)
    -- Global Scope  (Accessible everywhere in the code)
    -- Block Scope   (Accessible only within the block where it is declared (let, const))
    -- Function Scope (Accessible only within the function)
    -- Lexical Scope  ( Inner functions have access to the variables in their outer scope but vice versa is not true)

*/

// Local Scope   (Accessible inside the function where it is declared)

/* function greet(){
    let localvar = "Hello"; // Local variable
    console.log(localvar);  // hello
}
greet();
console.log(localvar); // Error: localVar is not defined */

// Global Scope  (Accessible everywhere in the code)

/* let globalVar = "I am global"  // Global variable

function display(){
    console.log(globalVar);  // I am global
}

display(); */




// Block Scope   (Accessible only within the block where it is declared (let, const))

/* if(true){
    let blockVar = "I am block scoped"
    console.log(blockVar);  // I am block scoped
}
console.log(blockVar);  // Error: blockVar */



// Function Scope (Accessible only within the function)

/* function test(){
    var functionVar = "I am function scoped"

    if (true){
        var functionVar = "I am still function scoped" 
    }
    console.log(functionVar);  // I am still function scoped
}

test(); */


// Lexical Scope  ( Inner functions have access to the variables in their outer scope but vice versa is not true)

function outer(){
    let outerVar = "Outer Variable";

    function inner(){
        console.log(outerVar);  // Outer Variable
    }
    inner();
}
outer();