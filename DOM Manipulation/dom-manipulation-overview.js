/* DOM Manipulation Overview

DOM represents the structure of a web page as a tree of nodes where each node represents an element, atrribute or text.

Basic concepts of DOM manipulation:

1. Selecting Elements

Before manipulating elements, you need to select them. Here are the common methods for selecting DOM elements:

- document.getElementById(): Selects an element by its id.
- document.getElementsByClassName(): Selects all elements with a specific class.
- document.getElementsByTagName(): Selects all elements with a specific tag name (like p, div).
- document.querySelector(): Selects the first element matching a CSS selector.
- document.querySelectorAll(): Selects all elements matching a CSS selector.


2. Manipulating Elements

Once you select an element, you can manipulate it by modifying its content, style, or attributes.

Changing Content
- textContent: Changes the text inside an element.
- innerHTML: Changes the HTML content inside an element.

Changing Style
- You can modify the style of an element using the style property.

Changing Attributes
- You can change attributes like src for images or href for links.


3. Creating and Removing Elements

You can also create new HTML elements using JavaScript and add them to the DOM.

- document.createElement(): Creates a new element.
- appendChild(): Adds a new element to the DOM.

You can remove elements from the DOM using:

- remove(): Removes the element from the DOM.
- removeChild(): Removes a child element from a parent element.


4. Event Handling

- responds to user actions such as clicks, key presses, mouse movements etc.

Common Types of Event:

- Mouse Events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave
- Keyboard Events: keydown, keyup, keypress
- Form Events: submit, change, focus, blur, input, reset, select
- Window Events: load, resize, scroll

*/