/* map() method

- map() method executes a provided function once for each element of array. 
- map() method transforms each element in an array and returns a new array with the transformed elements.
- map() by default does not modify the original array, same as in case with forEach()

*/

/* map() vs forEach()

- Use map(), when you need to create a new array by transforming each element to original array.

- Use forEach(), when you need to perform an action on each element of the array but do not need a new array.

- map() is chainable i.e. we can attach methods to it like reduce(), sort(), filter() etc.

*/

// map() Example

let numbers = [1,2,3,4];

// use map() to create a new array with each number doubled

let doubledNumbers = numbers.map(function(number){
    return number*2;
})

console.log(doubledNumbers);  // [2,4,6,8]
console.log(numbers);  // [1,2,3,4];