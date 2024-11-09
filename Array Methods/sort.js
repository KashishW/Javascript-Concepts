/* Sort() method

- sorts the elements of an array and returns the sorted array.
- modifies the original array.


*/


/* // Sorting strings
const fruits = ["Apple","Kiwi","Banana"];
const sortedFruits = fruits.sort();

console.log(sortedFruits);  // [ 'Apple', 'Banana', 'Kiwi' ] */


// Sorting Numbers

/* const numbers = [3,12,4,5,1,22];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);  // */

// To overcome this we need to use function
/* const numbers = [3,12,4,5,1,22];
const sortedNumbers = numbers.sort((a,b) => a-b);
console.log(sortedNumbers); // [ 1, 3, 4, 5, 12, 22 ] */


// Descending order
const numbers = [3,12,4,5,1,22];
const sortedNumbers = numbers.sort((a,b) => b-a);
console.log(sortedNumbers); // [ 22, 12, 5, 4, 3, 1 ]