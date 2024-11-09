/* Promises

- Promises are used to handles operations like data fetching or other tasks that take time.

- Promises is a way to handle asynchronous operations.

- Promises represents a value that may be available now, in future or never.

- 
    -- If code executes, 'resolve' is called.Using Promises, if the code executes or fail, in both the cases, the subscriber will be notified.
    -- If code fails, 'reject' is called.

- The Promise object returned by new Promise has following properties:
    -- State : Initially Pending, then changes to either 'fullfilled' when resolve is called or 'rejected' when reject is called.

    -- Result : Initially undefined then changes to value if resolve is called i.e. resolve(value) or error when rejected i.e. reject(error)

- Promises are created using the 'Promise' constructor and can be consumed using 'then' and 'catch' methods.
    -- 'then' method is called to handle successful completion of promise.
    -- 'catch' method is called to handle error case of promise.

- Promise has 4 states:
    -- pending  (not fulfilled or rejected yet)
    -- fulfilled
    -- rejected
    -- settled (Promise has fulfilled or rejected)

- Why we use Promises
    Suppose we have to do following task:
    a.) Fetch google.com home page
    b.) Fetch data from API
    c.) Fetch picture from server
    d.) Perform Rest of the script

    To do these tasks in parallel, promises are used. So .then() and .catch() methods are used for parallel executions.


*/

//  Creating a Promise and consuming a Promise example

// Create a Promise

let myPromise = new Promise((resolve, reject)=>{

    let success = false;

    if(success){
        resolve("Task completed")
    }
    else{
        reject("Task Failed")
    }
});


// Consume a Promise

myPromise
.then(result => console.log(result))   // Task completed
.catch(error=>console.log(error)) // Task Failed



