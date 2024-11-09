/* IIFE (Immediately Invoked Function Expression) */

// IIFE is a function that is executed immediately after it is defined.

/* Use Case of IIFE 
- used in case of database, once the application gets start, then functions to get connect to db gets called immediately.

- The main reason to use IIFE is to remove the pollution from global variables.
 
*/


(function(){
    console.log("This function runs immediately");
})();






  