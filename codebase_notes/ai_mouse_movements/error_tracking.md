# Error Tracking [For Sanity Purposes]
### SyntaxError: Cannot use import statement outside a module
* occurs when importing `index.js`.
  * i.e. `import model from "/src/model.json";`
  * but there is no issue with `require` imports, such as `const express = require("express");`
* [__The difference between “require(x)” and “import x”__](https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x)
  * The major difference between `require` and `import`, is that `require` will automatically scan `node_modules` to find modules, but `import`, which comes from ES6, won't.
  * Most people use `babel` to compile `import` and `export`, which makes `import` act the same as `require`.
---
### Why doesn't `console.log` work in `app.___()` methods?
* It does work! It's just that it's logged in __terminal__ instead of the __browser__.
* i.e.
```
app.get("/", (req, res) => {
        console.log(model); // in terminal
        res.sendFile(path.join(__dirname, "./src/model/tfjs_model/", "model.json"));
        });
```
---
 ### UnhandledPromiseRejectionWarning: Error: Request to http://localhost:3000/src/model/tfjs_model/model.json failed with status code 404. Please verify this URL points to the model JSON of the model to load.
 * when doing: `tf.loadLayersModel(...)`
 * Doesn't append to localhost like `express.static` does
 * __Clue:__ `res.sendFile(path.join(__dirname, "./src/model/tfjs_model/", "model.json"));`
 * But: `UnhandledPromiseRejectionWarning: TypeError: Only absolute URLs are supported`
  * need the `file://` keyword
    * source: https://stackoverflow.com/questions/56049893/only-absolute-urls-are-supported-when-loading-keras-model-in-tensorflow-js-wit
