// Shallow copy and deep copy   :      both refers to how objects are duplicated.

/* Shallow copy

- Copies the main object but shares inner objects i.e. only copies the top level properties.

- Use Case: 
    -- Use Shallow copy when you need a simple duplicate and you are ok if changes to inner objects affect both copies.


*/

// let original = {name: 'Ram', details:{age:11}}

// let shallowCopy = {...original};

// shallowCopy.name = "Bob";
// shallowCopy.details.age = 22;


// console.log(original);  // { name: 'Ram', details: { age: 22 } }
// console.log(shallowCopy); // { name: 'Bob', details: { age: 22 } }





/* Deep copy

- Copies the main object and all inner objects, creating a fully independent duplicate i.e. recursively copies all nested properties.

- Use Case: 
    -- Use deep copy when you need a completely independent copy especially for complex objects with nested elements.
        Ex: Copying a list that contains other lists or objects and you do not want changes in one copy to affect the other.

*/
let original = {name: 'Ram', details:{age:11}}

let deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.name = "Bob";
deepCopy.details.age = 22;


console.log(original);  // { name: 'Ram', details: { age: 11 } }
console.log(deepCopy);  // { name: 'Bob', details: { age: 22 } }