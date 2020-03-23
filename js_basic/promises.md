# Promises
* Based on [this article](https://tylermcginnis.com/async-javascript-from-callbacks-to-promises-to-async-await/), [this article](https://www.vikingcodeschool.com/professional-development-with-javascript/promises) and [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## What is a Promise?
* Proxy (handles requests)
  * Handles by resolving or rejecting (i.e. for error-catching) the request
  * You can specify the conditions for resolving or rejecting the request

## Why were Promises created?
* Promises were created to give the developers control over what exactly happens with asynchronous requests. There is a definite outcome assigned to each promise.
  * This definite outcome is either fulfilled/rejected.
  * Promises have three states: `pending` (initial state), `fulfilled`, `rejected`.
* The __benefit__ is that managing asynchronous requests becomes easier

## 1. How do you create a Promise?
Simple as `const promise = new Promise()`.

## 2. How do you change the status of a promise?
The Promise constructor function takes in a single argument, a (callback) function. This function is going to be passed two arguments:

* `resolve( successPayload )` - a function that changes the status of the promise to fulfilled and returns a value, `successPayload`
* `reject( rejectPayload )` - a function that changes the status of the promise to rejected and returns a value, `rejectPayload`

## 3. How do you listen for when the status of a promise changes?
Promises have two main methods:
* `.then( sucessCallback, failureCallback )`: takes up to two arguments (callback functions for the success and failure cases of the Promise)
  * When the status of Promise changes to __fulfilled,__ the callback passed to `.then()` will be invoked.
* `.catch()`
  * When the status of Promise changes to __rejected,__ the callback passed to `.catch()` will be invoked.
* Both `.then()` and `.catch()` return Promises. This allows you to chain promises (which is discussed later).

### [Then v. Then + Catch](https://stackoverflow.com/questions/33278280/promise-then-vs-then-catch)
What is the difference between these two:
```
// then only
myPromise.then(function() {
    console.log('success');
}, function() {
    console.log('error');
});

// then + catch
myPromise.then(function() {
    console.log('success');
}).catch(function() {
    console.log('error');
});
```
In this specific case, there is no difference. This is because `console.log('success')` resolves successfully. However, what if there is __an error thrown by the success handler__?
```
// myPromise.then(func, errHandle)
myPromise.then(function() {
   // Some error may happen
   throw('An unhandled exception.');
}, function() {
    // This won't log the error if it happens in the
    // some error may happen block.
    console.log('error');
});
```
On the other hand, `.catch()` will handle any error thrown by `.then()` (or the previous result):
```
myPromise.then(function() {
   // Some error may happen
   throw('An exception that would be caught');
}).catch(function() {
    console.log('error');
});
// Is the same as this, the errHandle tries to catch any unhandled error
// from previous result.
myPromise.then(func, null).then(null, errHandle);
```

## Chaining
* `.then()` and `.catch` return Promises, so this means we can call `.then()` and `.catch` sequentially:

```
function getPromise () {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

function logA () {
  console.log('A')
}

function logB () {
  console.log('B')
}

function logCAndThrow () {
  console.log('C')

  throw new Error()
}

function catchError () {
  console.log('Error!')
}

getPromise()
  .then(logA) // A
  .then(logB) // B
  .then(logCAndThrow) // C
  .catch(catchError) // Error!
```
This allows us to write asynchronous code in a sequential (synchronous) manner, which is much more readable.

## Other Promise methods
* `.all(iterable)`: Waits until all promises in the iterable are resolved or until the first rejection
  * `iterable` can contain non-Promise values, but they will be ignored (but still counted in the returned values)
```
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
```
