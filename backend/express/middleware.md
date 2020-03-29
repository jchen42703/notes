# [Using middleware](https://expressjs.com/en/guide/using-middleware.html)
* Middleware is software that provides common services outside of what's offered by the operating system.
## Difference between Router-level and Application-level Middleware
* Basically no difference, but it's for modularity and reusability of certain systems (i.e. you'll have one app but multiple routers)
```
For example, you could build a whole user account subsystem that handles sign up, login, forgot password, etc, and share it between several different applications by "mounting" it within them via app.use(require("my-user-system")).
```
(From [here](https://stackoverflow.com/questions/29457008/whats-the-difference-between-application-and-router-level-middleware-when-rou/45667410))

Here's another example from the same stackoverflow question:
```
// birds.js

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page');
});
```

In `app.js`:

```
// app.js

const express = require('express')
const app = express()

var birds = require('./birds');
app.use('/birds', birds);

app.listen(3000, () => console.log('app listening on port 3000!\naccess http://localhost:3000/birds/'))
```
Now requests to http://localhost:3000/birds/ will go to birds.js file.

This modular approach will make easy to maintain a large code base, as the application grows big.
