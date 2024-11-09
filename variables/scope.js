/*  Variables (var, let, const)        
var vs let vs const */

/* Scope
    - var is function scoped
    - let and const are block scoped.
 */


function testScope(){

    if(true){
        var x = "I am var" // Function scoped

        let y = "I am let" // Block scoped

        const z = "I am const" // Block scoped

    }

    console.log(x)  // I am var  // Function scoped
    console.log(y)  // Error // // Block scoped
    console.log(z)  // Error // Block scoped
}

testScope()

