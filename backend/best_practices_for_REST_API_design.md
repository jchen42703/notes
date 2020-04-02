# [Best Practices for REST API Design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

## Accept and respond with JSON
### Why JSON?
* Because it is the most common and most supported
### So what should I do?
* set `Content-Type` in the response header to `application/json`
* We should also make sure that our endpoints return JSON as a response. Many server-side frameworks have this as a built-in feature:
```
app.post('/', (req, res) => {
  res.json(req.body);
});
```
  * [Reasoning is that it's nice to confirm the response with your eyes.](https://softwareengineering.stackexchange.com/questions/314066/restful-api-should-i-be-returning-the-object-that-was-created-updated)
  * Some people just return `200 OK` (i.e. `res.sendStatus(200)`)

### Exceptions
* if we’re trying to send and receive files __between client and server.__
  * Exception b/c form data is good for sending data
  * Then we need to handle file responses and send form data from client to server.

## Use nouns instead of verbs in endpoint paths
* Because the HTTP verbs are your verbs, so just make it easy to understand what you're doing by using nouns to match with the HTTP verbs.
  * i.e. `GET /articles/:id`

## Name collections with plural nouns
...
https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
