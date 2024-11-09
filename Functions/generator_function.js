/* Generator Function 

- Generator Function produces sequence of values one at a time.

- When we call generator function, it does not run all at once, instead it generates value lazily, pausing and resuming execution as needed.

- It is defined using function* syntax and contains one or more 'yield' statements.


*/


function* numberGenerator(){

    yield 1; // pauses and returns 1
    yield 2; // pauses and returns 2
    yield 3; // pauses and returns 3
}

const gen = numberGenerator();

console.log(gen.next().value);  // 1
console.log(gen.next().value); //2
console.log(gen.next().value); //3