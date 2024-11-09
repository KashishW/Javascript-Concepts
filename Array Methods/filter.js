/* filter() method

- filter() method is used to create a new array having the filtered elements based on the conditions.
- returns blank if not found
- doesn't modifies the original array

*/


let numbers = [1,2,3,4,5,6];

// use filter() to craete a new array with even numbers

let evenNumbers = numbers.filter(function(number){
    return number % 2 === 0
})

console.log(evenNumbers);  // [2,4,6]
console.log(numbers); // [1,2,3,4,5,6];