/* Async/Await Functions

- allows to execute asynchronous operations using async and await keyword.

- always returns a promise. other values are wrapped in promise automatically.

*/

/* Note */

// We use try and catch to handle the errors. 
// Inside try we perform  asynchronous operations using await. If operation fails, it goes to catch block to handle errors.

// Use cases
// Fetching data from apis
// Waiting for a delay
//Reading files


async function fetchData(){

    let response = await fetch('https://dummyapi.online/api/movies');   // Waits for the data to be fetched

    let data = await response.json();  // Waits for the response to be converted to JSON

    console.log(data);   // Logs the data once it is available

}

fetchData()
