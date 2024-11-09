// Slice() and Splice() method

/* Slice method 

- slice() is used to create a new array by copying a portion of another array.
- slice() returns a new array conataining the extracted elements.
- original array will not be changed.
- takes 2 parameters
    -- start position and end position (end not included)

*/

// Slice method example

/* // Define an array of colors
let colors = ["red","blue", "green","yellow","purple"]

// Use slice to get a portion of array

let slicedColors = colors.slice(1,4);

console.log(slicedColors); // ["blue", "green","yellow"]
console.log(colors); // ["red","blue", "green","yellow","purple"] */



/* Splice method

- splice() is used to add, remove or replace elements in an array.
- splice() returns a new array conataining the removed elements (if any)
- modifies the original array
 

*/

// Syntax of splice method

// Array.splice(start, deleteCount, item1,item2)

let colors = ["red","blue", "green","yellow","purple"]

// Use splice to remove two elements starting from index 1 and will add a new color

let removedColors = colors.splice(1,2,"orange");

console.log(colors); // ["red","orange","yellow","purple"]
console.log(removedColors);  // ["blue", "green"]

