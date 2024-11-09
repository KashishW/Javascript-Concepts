/*  Function Expression

- Function expression are used to assign a function to a variable making a function availbale through that variable.

- Function expressions are not hoisted to the top of their scope means we can not call the function before its declaration.

- also an example of anonymous function i.e. function without name.

*/


//Callinmg the function before its assigned

sayHello();

// Function Expression

const sayHello = function(){
    console.log("Hello everyone");   // Reference error
}





