# [JavaScript Promises and Async/Await: As Fast As Possible](https://itnext.io/javascript-promises-and-async-await-as-fast-as-possible-d7c8c8ff0abc)
Promises make writing asynchronous code easier. Async/await syntax allows us to write promise-based asynchronous code in synchronous format, which __saves times and makes the code more scalable.__

## Asynchronous Calls in Web APIs
* __synchronous manner:__ Code executed in a series
  * Why is this called synchronous?
* Web APIs extend JS by allowing asynchronous tasks
  * We want asynchronous because more threads == better performance
  * i.e. `setTimeout` is a Web API that performs some action after a given delay.
  * Note: Web APIs are not part of the default JS engine. They are provided by the __browser or server-side JS frameworks (NodeJS).__
  * More info on Web APIs in the [`event_loop.md`](./event_loop.md)

```
function a() {
	setTimeout( function() {
        console.log( 'result of a()' );
    }, 1000 ); // 1 second delay
}
function b() {
	setTimeout( function() {
        console.log( 'result of b()' );
    }, 500 ); // 0.5 second delay
}
function c() {
	setTimeout( function() {
        console.log( 'result of c()' );
    }, 1200 ); // 1.1 second delay
}
// call in sequence
a();
console.log('a() is done!');
b();
console.log('b() is done!');
c();
console.log('c() is done!');
```

Here, the callback functions are the ones calling `console.log()`. What's happening under the hood is that the functions are called and `setTimeout` registers the callback in order:
```
"a() is done!"
"b() is done!"
"c() is done!"
```
Once the delay time passes, `setTimeout` passes the callback function to the __event loop__ and the event loop queues it in the __task/macrotask queue.__
* __event loop:__ the endlessly running, single threaded (on the main JS thread) loop that listens for different events. It accepts callback functions and executes them.
  * Since the event loop runs on the main JS thread, when the main thread is clogged, the event loop is dead at that time.
* __macrotask queue:__ FIFO queue of callback functions waiting to be executed
  * event loop pushes the oldest function from the queue to the main call stack where they are executed synchronously
  * Again, since the event loop runs on the main JS thread, it can only do this __when the stack is empty or when the main thread is not busy.__
  * So...__this is why all of the synchronous functions are executed first.__
  * Afterwards, the asynchronous callbacks are run:
  ```
  "result of b()"
  "result of a()"
  "result of c()"
  ```

## Callback Hell
However, what if we want the output to be in a series like:
```
"a() is done!"
"result of a()"
"b() is done!"
"result of b()"
"c() is done!"
"result of c()"
```
We can do this by calling the `"the result of ...` as a part of the callback for `setTimeout` and calling the functions nested within each other:
```
function a( callback ) {
	setTimeout( () => {
        console.log( 'result of a()' );
        callback();
    }, 1000 ); // 1 second delay
}

function b( callback ) {
	setTimeout( () => {
        console.log( 'result of b()' );
        callback();
    }, 500 ); // 0.5 second delay
}

function c( callback ) {
	setTimeout( () => {
        console.log( 'result of c()' );
        callback();
    }, 1200 ); // 1.1 second delay
}

// call in sequence
a( () => {
    console.log('a() is done!');
    // b() inside of a()
    b ( () => {
        console.log('b() is done');
        // c() inside of b()
        c( () => console.log('c() is done!') );
    });
});
```
This nesting of functions is referred to as __callback hell__ because of how messy it gets...

## Promises to the Rescue!
* __Promise:__ a proxy (intermediary that handles requests) class
