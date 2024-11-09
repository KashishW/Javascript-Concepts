/* Static Methods of Promise

- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()
- Promise.resolve(value)
- Promise.reject(value)

*/

/* Promise.all()
- waits for all promises to resolve and returns the array of their results. 
  If any of the promise fails, it becomes the error and all the other results are ignored.
  
 */

/* Promise.allSettled()
- waits for all promises to settle and returns their results as an array of objects with status and value.

 */

/* Promise.race()
- waits for the first promise to settle and its result/error becomes the outcome.

 */

/* Promise.any()
- waits for the first promise to fulfil (not rejected) and its result becomes the outcome.
- Throws aggregate error if all the promises are rejected.

 */

/* Promise.resolve(value)
- Create a Promise that is resolved with the given value.

 */

/* Promise.reject(value)
- Create a Promise that is rejected with the given reason.

 */


/* const promise1 = Promise.resolve("Resolved 1")
const promise2 = Promise.resolve("Resolved 2")
const promise3 = Promise.reject("Rejected 3") */

/* Promise.all()
- waits for all promises to resolve and returns the array of their results. 
  If any of the promise fails, it becomes the error and all the other results are ignored.
  
 */
/* Promise.all([promise1,promise2,promise3])
.then(result => console.log(result))
.catch(error => console.log(error))  // Rejected 3 */

/* Promise.allSettled()
- waits for all promises to settle and returns their results as an array of objects with status and value.

 */

/* Promise.allSettled([promise1,promise2,promise3])
.then(result => console.log(result))
.catch(error => console.log(error))  */

/* Promise.race()
- waits for the first promise to settle and its result/error becomes the outcome.

 */
// const promise1 = Promise.resolve("Resolved 1")
// const promise2 = Promise.resolve("Resolved 2")
// const promise3 = Promise.reject("Rejected 3")

/* Promise.race([promise1,promise2,promise3])
.then(result => console.log(result))  // Resolved 1
.catch(error => console.log(error))  */


/* Promise.any()
- waits for the first promise to fulfil (not rejected) and its result becomes the outcome.
- Throws aggregate error if all the promises are rejected.

 */

/* Promise.any([promise1,promise2,promise3])
.then(result => console.log(result))  // Resolved 1
.catch(error => console.log(error))  */

/* Promise.resolve(value)
- Create a Promise that is resolved with the given value.

 */

/* const promise = Promise.resolve("Immediate sucess")

promise.then(result => console.log(result))  // Immediate success */


/* Promise.reject(value)
- Create a Promise that is rejected with the given reason.

 */


const promise = Promise.reject("Immediate failure")

promise.catch(error=> console.log(error))  // Immediate failure



