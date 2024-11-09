/* Closures

- When a function is defined inside another function, the inner function has access to the variables of outer function. 
Even after the outer function is executed, the inner function still remembers and can use those outer variables but vice versa is not true.

- Closures are same like lexical scoping

- Closures allows to keep data private and remember values across function calls. Ex. Counters.

- In simple terms, Closures allows a function to remember the environment in which it was created.

*/

// Counters (Basic example of Closures)

function createCounter(){

    let count = 0; // it is in the outer scope of incremnet function

    function increment(){
        count++;   // it has access to count 
        console.log(count);
    }
    return increment;  // return inner function
}

const counter = createCounter();     // counter is now a function that has access to count

counter();  // 1
counter();  // 2
counter();  // 3




