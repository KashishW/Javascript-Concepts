/* Recursion

- Recursion is a technique where a function calls itself.

- used in cases where repetitive tasks are involved. Ex. in factorial or in count down.

*/

// Example of Recursion (Count Down Example)


function countDown(n){   //5    4   3   2   1

    if(n <= 0){
        console.log("Done");  // Done
    }
    else{
        console.log(n);  //5    4   3   2   1

        countDown(n-1);  // Recursive call with smaller number   // 4
    }

}

countDown(5);
