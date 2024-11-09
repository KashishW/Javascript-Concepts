// includes(), some() and every() method

/* includes() method

- returns true if the array contains that element, otherwise it returns false.
- quick way to see if an item is in an array

*/


/* let fruits = ["apple", "banana", "mango"];

// check if mango is present in array or not

let hasMango = fruits.includes("kiwi")

console.log(hasMango);  // false */




/* some() method

- returns true if atleast one element in the array satisfies the condition, otherwise it returns false.

*/

/* let numbers = [3,7,10,15];
//check if there is any number greater than 10

let hasNumber = numbers.some(function(number){
    return number>100;
})

console.log(hasNumber);  // false */




/* every() method

- returns true if all the elements in the array satisfies the condition, otherwise it returns false.

*/

let numbers = [3,7,10,15];

let hasNumber = numbers.every(function(number){
    return number>2;
})

console.log(hasNumber);  // true


