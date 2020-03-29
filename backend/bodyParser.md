# [How bodyParser works](https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90)
* __You need to use bodyParser() if you want the form data to be available in req.body.__
* data isn't in `req.body`, but comes in streams from the `POST` request

* bodyParser works something like this:

```
app.use(function( req, res, next ) {
  var data = '';
  req.on('data', function( chunk ) {
    data += chunk;
  });
  req.on('end', function() {
    req.rawBody = data;
    console.log( 'on end: ', data )
    if (data && data.indexOf('{') > -1 ) {
      req.body = JSON.parse(data);
    }
    next();
  });
});
```
So... `bodyParser` returns a function that acts as a middleware to parse streams of data into types that we want to work with.
