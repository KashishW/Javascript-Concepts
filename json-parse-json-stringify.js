// JSON.parse() and JSON.stringify()

/* JSON.stringify()

- Converts a Javascript object to JSON string. 

Use Case:  JSON string is in text format and is used to store data in local storage or for sending data over network ex. in api call.


*/


// let user = {name:'Kashish', age: 10, active:true};

// let jsonString = JSON.stringify(user);

// console.log(jsonString);  // '{"name":"Kashish","age":10,"active":true}'




/* JSON.parse()

- Converts a JSON string to Javascript object. 

Use Case:  JSON.parse() parses JSON data received from API's which is suitable for manipulation in Javascript code.


*/

let jsonString = '{"name":"Kashish","age":10,"active":true}'

let user = JSON.parse(jsonString);

console.log(user);  // { name: 'Kashish', age: 10, active: true }