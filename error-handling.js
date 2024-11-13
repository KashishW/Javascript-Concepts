/* Error Handling in Javascript

- Error handling in JavaScript is done using the try...catch statement. 
  This allows you to handle exceptions (errors) that occur during runtime and prevent your program from crashing.

1. try block: Contains the code that might throw an error. If an error occurs, the flow moves to the catch block.

2. catch block: This block is executed if an error is thrown in the try block. 
                The error is caught as an error object, which you can then handle (e.g., log it or display an error message to the user).
    
   The error object provides details about the error, such as:
    name: Type of the error (e.g., SyntaxError, TypeError).
    message: A message describing the error.

3. finally block: This block runs after the try and catch blocks, regardless of whether an error occurred or not. 
                  It's useful for cleanup tasks (e.g., closing a file, clearing timeouts, etc.).
*/


try{
    let age  = -25;
     if (age < 0){
        throw new Error("Age can not be negative")
     }
     else{
        console.log('Age is valid', age);  // success case
     }
}
catch(error){
    console.error(error.message);  // Age can not be negative
}
finally{
    console.log("Validation Complete");  // Validation Complete
}