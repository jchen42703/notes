# Basic Javascript Concepts for Periodic Review

## [Callback Functions](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
A callback function is a function __passed as an argument__ to another function and then __invoked inside the said outer function.__ Here is an example of a __synchronous callback (greeting):__
```
// greeting is our callback function
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```
It's synchronous because it is invoked immediately. __Asynchronous callbacks__ are callbacks that are executed after an asynchronous operation has been completed. You'll often see them in `.then()` chained on the end of a promise (after that said promise fulfills/rejects).

You'll see this structure in many web APIs, such as `fetch()`.
