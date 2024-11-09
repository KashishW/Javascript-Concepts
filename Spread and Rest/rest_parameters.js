/* Spread Operators and Rest Parameters in Javascript

- both uses '...' syntax but serve different purposes.

*/

/* Rest Parameters

- useful when we want a function to accept any number of arguments.

- must be the last parameter in function definition.

*/

//- useful when we want a function to accept any number of arguments.

function myFun(a,b,...rest){

    console.log(a);  //1
    console.log(b);// 2
    console.log(rest);  // [3,4,5]
}

myFun(1,2,3,4,5,6,7,89)