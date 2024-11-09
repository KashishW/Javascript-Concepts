/* Object.entries(obj): 

Returns an array of [key, value] pairs for each property in the object. 

*/

/* 
const person={
    name:'Ram',
    age: 9,
    country: 'India'
}

const entries = Object.entries(person);

console.log(entries); */

// [ [ 'name', 'Ram' ], [ 'age', 9 ], [ 'country', 'India' ] ]



/* Object.assign(target, ...sources): 

Copies properties from one or more source objects to a target object.

*/

const person={
    name:'Ram',
    age: 9,
    country: 'India'
};

const address ={
    city: 'Jaipur',
    building: 'A'
}

const personWithAddress = Object.assign({}, person,address)

console.log(personWithAddress);
/* 
{
    name: 'Ram',
    age: 9,
    country: 'India',
    city: 'Jaipur',
    building: 'A'
  } */