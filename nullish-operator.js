/* Nullish Operator (??)

- denoted by ??

- provides a default value when dealing with null or undefined.

*/

// Without nullish Coalescing

// We will set a default value of age if it is not provides


// const userAge = null;

// const age = (userAge!= null && userAge!= undefined) ? userAge : 18;

// console.log(age);  // 18

// It requires comparisons and can become more complex and repetitive so to overcome this we use Nullish operator


// With Nullish Coalescing

const userAge = null;

const age = userAge ?? 18;

console.log(age);  // 18   // simplified code


