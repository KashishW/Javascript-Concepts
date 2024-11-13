// Optional chaining

/* Optional chaining (?)

- we use ? operator.

- Optional chaining is used to check undefined or null.

- reduces multiple if statement or logical AND operators (&&).

*/

// Without optional Chaining

// const user ={
//     name: 'Kashish',
//     // No address Property
// };

// // Access nested properties without optional chaining

// let city;

// if(user.address && user.address.city){
//     city = user.address.city
// }
// else{
//     city = "Unknown"
// }

// console.log(city);    // unknown

// This approach is long and can become more complex, so to overcome this we use optional chaing


// With optional chaining

const user = {
        name: 'Kashish',
    // No address Property
};

// Using  optional chaining

const city = user.address?.city  || 'Unknown'

console.log(city);    // unknown