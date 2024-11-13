/* Map and Set in javascript 

Map and Set are built-in objects that provide various ways to store collections of data.

*/


/* Map

- A map is a collection  of key-value pairs just like an object but the difference is that map allows keys and values of any type.

- We can iterate over the elements.

- Maps have 'size' property that provides the number of key-value pairs.

- Maps provide various methods such as 'set', 'get', 'has', 'delete', 'clear'.

*/

// Create a new map

// const myMap = new Map();

// // Adding 2 key value pairs

// myMap.set('name', 'Kashish');
// myMap.set('age', 8);

// // Accessing values

// console.log(myMap.get('name'));   // Kashish
// console.log(myMap.get('age'));   // 8

// // To check the size of map
// console.log(myMap.size);  // 2

// // To check if a key exists

// console.log(myMap.has('age'));  // true






/* Set

- A set is a collection  of unique values.

- We can iterate over the elements

- Set have 'size' property that provides the number of key-value pairs.

- Set provide various methods such as 'add', 'has', 'delete', 'clear'.

*/

// Creating a new Set

const mySet = new Set();

// Adding values to set

mySet.add(1);
mySet.add(2);
mySet.add(1); // It will not be added, because of duplicate value

// To check the size of Set

console.log(mySet.size);  // 2

// To check if a value exists

console.log(mySet.has(3));  // false


console.log(mySet);  // Set(2) { 1, 2 }