// setTimeout() and setInterval()

/* setTimeout() 

- Executes a function once after a specified delay.

- Syntax:  setTimeout(function,delay)    

- Returns a timeoutId which can be used to cancel the timeout using  clearTimeout(timeoutId)

*/


// setTimeout(()=>{
//     console.log("This message appears after 2 seconds");     // This message appears after 2 seconds
// },2000)



/* setInterval() 

- Executes a function repeatedly at specified intervals.

- Syntax:  setInterval(function,interval)    

- Returns a intervalId which can be used to cancel the interval using  clearInterval(intervalId)


*/

let count = 0;

const intervalId = setInterval(()=>{
    count+=1
    console.log(`Interval count: ${count}`);

    if(count == 5){
        clearInterval(intervalId);
    }
}, 1000)