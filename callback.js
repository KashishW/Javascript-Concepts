/* Callbacks 

- A callback is a function that is passed as an argument to another function.
- Callbacks make it easy to run code in a specific order, especially when dealing with asynchronous tasks, like fetching data

- Disadvantages of Callback:   
    -- callback Hell (Deeply nested callbacks)
    So better to use promises or Async/Await

*/


function processTask(task,callback){

    console.log(`Starting ${task}`);  // Startting Homework

    callback()  // Executes the callback function passed as an argument

}

function finishTask(){
    console.log("Task completed");  // Task completed
}

processTask("Homework", finishTask)

