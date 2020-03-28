# Notes on [The definitive guide to Express, the Node.js Web Application Framework](https://hackernoon.com/the-definitive-guide-to-express-the-node-js-web-application-framework-649352e2ae87)
(By Flavio Copes)

## Hello World
Saved to `index.js`:
```
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Server ready')
```
Start the server with `node index.js`. Server opens on port 3000. What exactly is going on?
`app.get()` is telling `app` to listen for GET requests.

## Methods for HTTP Verbs
```
app.get('/', (req, res) => { /* */ })
app.post('/', (req, res) => { /* */ })
app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })
app.patch('/', (req, res) => { /* */ })
```
`(req, res) => { /* */ }` is a callback function that takes in:
* `req` (Request object): holds HTTP request info
* `res` (Response object): holds HTTP response info

## Request parameters
These are the main properties you’ll likely use:

* `.app` holds a reference to the Express app object
* `.baseUrl` the base path on which the app responds
* `.body` contains the data submitted in the request body (must be parsed and populated manually before you can access it)
* `.cookies` contains the cookies sent by the request (needs the cookie-parsermiddleware)
* `.hostname` the server hostname
* `.ip` the server IP
* `.method` the HTTP method used
* `.params` the route named parameters
* `.path` the URL path
* `.protocol` the request protocol
* `.query` an object containing all the query strings used in the request
* `.secure` true if the request is secure (uses HTTPS)
* `.signedCookies` contains the signed cookies sent by the request (needs the cookie-parsermiddleware)
* `.xhr` true if the request is an XMLHttpRequest

## How to retrieve the GET query string parameters
The query string is the part that comes after the URL path and starts with an exclamation mark ?.
* Example: `?name=flavio`
* Multiple query parameters can be added using &: `?name=flavio&age=35`

This makes it easy to iterate on it using the for…in loop:
```
for (const key in req.query) {
  console.log(key, req.query[key])
}
```
You can access single properties as well:
```
req.query.name //flavio
req.query.age //35
```

## How to retrieve the POST query string parameters
If data sent by a POST query is in JSON:
* using Content-Type: application/json:
```
const express = require('express')
const app = express()
app.use(express.json())
```
* using Content-Type: application/x-www-form-urlencoded:
```
const express = require('express')
const app = express()
app.use(express.urlencoded())
```

In both cases, the query can be accessed from the Request body:
```
In both cases you can access the data by referencing it from Request.body:

app.post('/form', (req, res) => {
  const name = req.body.name
})
```

## Sending a response
`(req, res) => res.send('Hello World!')`
* `.send()` automatically sets the Content-Length HTTP response header (which is text/html in this case)
* The string is set as the body.
* `.send()` automatically closes the connection.

## Use end() to send an empty response
To send a response without any body, you can use the `.end()` method.

## Set the HTTP response status
...
