/* 1. Selecting Elements

Before manipulating elements, you need to select them. Here are the common methods for selecting DOM elements:

- document.getElementById(): Selects an element by its id.
- document.getElementsByClassName(): Selects all elements with a specific class.
- document.getElementsByTagName(): Selects all elements with a specific tag name (like p, div).
- document.querySelector(): Selects the first element matching a CSS selector.
- document.querySelectorAll(): Selects all elements matching a CSS selector. */


// Selects an element by its id.

let title = document.getElementById("main-title");

title.textContent = "Hello World"

console.log("Sleected by Id", title);

//  Selects all elements with a specific class.

let descriptions = document.getElementsByClassName("description")

console.log('length',descriptions.length);  //2

for(let i =0; i<descriptions.length; i++){
    descriptions[i].style.color = "blue"
}

// Selects all elements with a specific tag name (like p, div).

let paragraphs = document.getElementsByTagName("p");

for(let i =0; i<paragraphs.length; i++){
    paragraphs[i].style.fontWeight = "bold"
}

// Selects the first element matching a CSS selector.

let firstButton = document.querySelector(".button")

firstButton.textContent = "First button selected"

// Selects all elements matching a CSS selector. */

let allButtons = document.querySelectorAll(".button");

allButtons.forEach((button,index)=>{
    button.style.backgroundColor = "lightgreen"
})