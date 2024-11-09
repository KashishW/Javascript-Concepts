/* Reduce() method

- Reduce() method is used to execute a reducer function on each element of the array, resulting in a single output value.
- Reduce() method is used to reduce an array to a single value.

- Use Case: Ideal for summing numbers, calculating products etc.

- Syntax
array.reduce((accumulator, currentValue) => {
  // operation
}, initialValue);

- If no initial value is supplied, the first element in the array will be used as the initial accumulator value
  and callback will not execute on the first element.


*/

// Use Reduce to sum all the numbers in an array

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue  //15
},0)
console.log(sum);