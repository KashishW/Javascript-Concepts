// find() and findIndex() method

/* find() method 

- find() method  returns the value of first element from the array that satisfies the condition
- returns undefined when no value found.

- Disadvantage
    -- It returns only 1 element from the array. So to overcome this, we use filter() method which returns an array of filtered elements.

*/


/* let numbers = [5,12,8,130,44];

// Use find method to get the first number graeter than 10

let foundNumber = numbers.find(function(number){
    return number > 1000;
})

console.log(foundNumber);  // undefined */


/* findIndex() method 

- findIndex() method  returns the index of first element from the array that satisfies the condition
- returns -1  when no value found.

*/

let numbers = [5,12,8,130,44];

// Use findIndex method to get the index of first number graeter than 10

let foundIndex = numbers.findIndex(function(number){
    return number > 1000;
})

console.log(foundIndex); // -1