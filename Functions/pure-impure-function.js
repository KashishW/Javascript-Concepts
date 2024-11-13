// Pure and Impure Function

/* Pure Function

- Pure Function always returns the same output if we give the smae input.

*/

function add(a,b){
    return a + b
}
// console.log(add(2,3))  // 5
// console.log(add(2,3))   //5 





/* Impure Function

- Impure Function does not always returns the same output if we give the smae input.

*/
let counter = 0;
function incrementCounter(){
    counter++;
    return counter
}
console.log(incrementCounter());
console.log(incrementCounter());


