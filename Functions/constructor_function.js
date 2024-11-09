/* Constructor Function 

- Constructor Function is used to create multiple objects with similar properties and behaviors.
- Constructor functions start with a capital letter by convention, which helps distinguish them from regular functions.

*/

/* Use Case */
/* Constructor functions are useful when you need multiple objects of the same type, like creating many user profiles, products,
 or other entities with similar properties and methods */


 // Define a constructor function for creating Person objects

 function Person(name, age){
    this.name = name;   // Assign the name property
    this.age = age;   // Assign the age property
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and my age is" + this.age)
    };

 }

 // Create new instances of Person using constructor function

 const person1 = new Person("kashish", 30);
 const person2 = new Person("Ram", 31);


 // Call the greet method on each instance

 person1.greet();
 person2.greet();

