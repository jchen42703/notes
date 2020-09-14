# Review/Snippets [For Sanity]

## Why can't we use `app.get()` multiple times in a row in `index.js`?
IDK

## `module.exports` v. `exports`
### History of Modules
* In the beginning, JS --> small language and not expected to do much
* Then came `RequireJS` and `AMD` (asynchronous module loading)
* Then `node.js` --> `CommonJS` (`module.exports` and `require`)
* ES6 with `import` and `exports` with `babel`
  * Javascript module syntax?
* UMD allows a JavaScript module to be compatible across all the different module formats.

## CommonJS (`require` and `module.exports`)
### Revealing module pattern
```
function getUser() {
    // Code here
}

function getUsers() {
    // Code here
}

module.exports = {
    getUser,
    getUsers
}
```
## Can export on the fly as well
(But not recommended)
```
module.exports.getUser = () => {
    // Code here
}

module.exports.getUsers = () => {
    // Code here
}
```
* Resources:
  * https://stackify.com/node-js-module-exports/#:~:text=Module%20exports%20are%20the%20instruction,to%20access%20the%20exported%20code.
