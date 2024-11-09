/* Object.freeze(obj): 

Prevents any modifications to an object, making it immutable. 

*/

/* const person = {
    name: 'Ram',
    age:11
};

Object.freeze(person);  // immutable because of freeze method

person.name = 'Kashish'
person.age=22;

console.log(person);  // { name: 'Ram', age: 11 } */







/* Object.seal(obj): 

Prevents adding or removing properties but allows modification of existing properties.

*/

const person = {
    name: 'Ram',
    age:11
};

Object.seal(person);

person.name = 'Kashish'
person.age=22;


console.log(person); // { name: 'Kashish', age: 22 }

person.country ='India';

console.log(person); // { name: 'Kashish', age: 22 }