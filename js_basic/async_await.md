# [Async Await](https://javascript.info/async-await)
This builds on promises by letting us interact with Promises without having to rely on `.then()` and `.catch` chains. With `async/await` we can write the asynchronous even more like synchronous code that is even more readable.

## Async
* Modifies a function so that it always returns a Promise
  * wraps function so that non-promise values are placed in a resolved/rejected Promise (rejected is for Errors).
* allows you to actually use the `await` keyword (inside the defined function/method).

```
// returns a resolved Promise with the result of 1
async function f() {
  return 1; //
}
// which is the same as
function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

## Await
* Tells JS to wait until the specified promise settles and returns its result.
```
let value = await promise;
```

## Promises v. Async/Await
This is an example from [this article](https://tylermcginnis.com/async-javascript-from-callbacks-to-promises-to-async-await/):
```
$("#btn").on("click", () => {
  getUser("tylermcginnis")
    .then(getWeather)
    // data is an object with "user" and "weather"
    .then((data) => updateUI(data))
    .catch(showError)
})

$("#btn").on("click", async () => {
  const user = await getUser('tylermcginnis')
  const weather = await getWeather(user.location)

  updateUI({
    user,
    weather,
  })
})
```
The `async/await` code is just much more readable. However, to do error catching, you must use `try/catch` statements instead of `.catch()`.

## Misc.
* `await` supports `Thenables` (anything with the method `.then()`). This is if you are using a third-party library that may use JS Promises, but use Promise-like objects.
* `await` works well with `Promise.all(iterable)`
