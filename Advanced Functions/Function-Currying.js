/* Function Currying

- Instead of taking all the arguments at once, a curried function take the first argument and returns a new function that 
  takes the second argument and so on, until all the arguments have been provided.
  
*/

// Normal Function without currying 
function calculatePrice(price,tax){

  return price + price*tax;
}

// console.log(calculatePrice(100,0.2));  //120
// console.log(calculatePrice(200,0.2)); //240


//  Function without currying 

function curriedcalculatePrice(tax){

  return function(price){
    return price + price*tax;      // price + price*0.2   // 100 + 100*0.2   //120   // 200 + 200 *0.2
  }
}

const applyTax = curriedcalculatePrice(0.2)   // Tax rate is preset

console.log(applyTax(100));  //120
console.log(applyTax(200)); //240


