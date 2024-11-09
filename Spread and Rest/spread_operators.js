/* Spread Operators and Rest Parameters in Javascript

- both uses '...' syntax but serve different purposes.

*/

/* Spread Operators

- Spread Operators are used to create shallow copy of an array or object

- Spread Operators are used to pass elements of an array as individual arguments to a function.

- Spread Operators are used to create a new array by expanding the elements of existing array.

*/

//  Spread Operators are used to create shallow copy of an array or object

let originalArray = [1,2,3];

let copiedArray = [...originalArray];

console.log(copiedArray);  // [1,2,3]


// - Spread Operators are used to pass elements of an array as individual arguments to a function.

function sum(a,b,c){
    return a+b+c;
}

let numbers = [1,2,3];
console.log(sum(...numbers));    // 6


//- Spread Operators are used to create a new array by expanding the elements of existing array.

let array1 = [1,2];
let array2 = [3,4];

let combinedArray = [...array1, ...array2];
console.log(combinedArray);  // [1,2,3,4]