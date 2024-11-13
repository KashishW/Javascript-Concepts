/* Higher order Functions

- follows any of following conditions:
    1. Accepts functions as arguments or
    2. Returns a function as its result
    3. or both of above

- Example of HOF: 
    map(), filter(), reduce() are Higher order Functions because they accepts functions as arguments.

*/


// map() Example

let numbers = [1,2,3,4];

// use map() to create a new array with each number doubled

let doubledNumbers = numbers.map(function(number){
    return number*2;
})

console.log(doubledNumbers);  // [2,4,6,8]
console.log(numbers);  // [1,2,3,4];



// let numbers = [1,2,3,4,5,6];

// // use filter() to craete a new array with even numbers

// let evenNumbers = numbers.filter(function(number){
//     return number % 2 === 0
// })

// console.log(evenNumbers);  // [2,4,6]
// console.log(numbers); // [1,2,3,4,5,6];