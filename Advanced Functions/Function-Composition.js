/* Function Composition

- is a technique to combine 2 or more functions.

*/


// Create two simple functions

function double(x){
    return x * 2;
}

function increment(x){
    return x + 1;   // 1
}

// Compose above functions to create new function  (Function Composition)

function doubleAndIncrement(x){

    return increment(double(x))   // increment(10)
}

console.log(doubleAndIncrement(5));  // 11

