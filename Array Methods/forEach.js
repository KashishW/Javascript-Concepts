/* forEach() method

- forEach() method executes a provided function once for each element of array.
- forEach() by default does not modify the original array. 
- If you modify the array within the callback function, then it will modify the original array.
- forEach() doesn't returns a new array
- We can not use break inside forEach loop i.e. when loop starts, it will always ends.
- forEach() returns undefined always.

*/

// Define an array of colors

let colors = ["red","blue","green","yellow"];

// Use forEach() to log each color to the console

colors.forEach(function(color){
    console.log(color);
});

//red
//blue
//green
//yellow



