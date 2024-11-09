// Shift() and Unshift() method


// shift: Removes the first element from an array and returns that element.


/* //Define an array of colors
let colors=["red","green","blue"];

// Use shift to remove first color from array

let removedColor = colors.shift()

console.log(colors);  //["green","blue"];
console.log(removedColor);  // red */



// unshift: Adds one or more elements to the beginning of an array and returns new length of array.

let colors=["red","green","blue"];

// Use unshift to add a color to the beginning of array

colors.unshift("Pink")

console.log(colors);  //["Pink",red","green","blue"];