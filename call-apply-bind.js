// call(), apply() and bind() method

/* Call() method

The call method calls a function immediately with a given 'this' value and arguments provided individually.

Use Case: useful when we want to borrow a method from one object and use it with another

*/

/* function greet(greeting){
    console.log(`${greeting}, my name is ${this.name}`);
    
}

const person = {name:'Kashish'}

greet.call(person, 'Hello') */

// Hello my name is Kashish


/* apply() method

The apply method is same as call method but the small difference is:
The apply method calls a function immediately with a given 'this' value and arguments provided as an array.

*/


/* function introduce(age, profession){
    console.log(`I am ${this.name}, ${age} years old, and I am a${profession}`);  // I am Bob, 30 years old, and I am adeveloper

    }
    const person = {name:'Bob'}

introduce.apply(person, [30,'developer']) */

// 



/* bind() method

The bind method returns a new function with a given 'this' value. The new function can be called later with arguments provided individually.

*/

const user = {
    name : 'Charlie',

    sayHi(){
        console.log(`Hi, I am ${this.name}`);   // Hi I am Charlie
    }
}

const sayHiUser = user.sayHi.bind(user);

sayHiUser()
