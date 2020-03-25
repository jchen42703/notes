# [HTTP Verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
Verbs defining certain actions across network connections:
* `GET`: retrieve data
* `POST`: submit an entity to the specified resource (often changing states or causing a side effect)
  * Annotation of existing resources;
  * Posting a message to a bulletin board, newsgroup, mailing list, or similar group of articles;
  * Providing a block of data, such as the result of submitting a form, to a data-handling process;
  * Extending a database through an append operation.

* `PUT`: replaces all current representations of the target resource with the request payload
  * used to create or overwrite a resource at a particular URL that is known by the client
* `DELETE`: deletes the resource
* `PATCH`: apply partial modification to a resource

## [POST v. PUT?](https://www.keycdn.com/support/put-vs-post)
* __URI (Uniform resource identifier):__ string of characters that unambiguously identifies a particular resource.
* The URI in a `POST` request identifies __the resource__ that will handle the enclosed entity.
* The URI in a `PUT` request identifies __the entity__ enclosed with the request.

### Idempotence
* property of an action that can be applied multiple times without changing the result beyond the first application.
* `PUT` is idempotent, but `POST` isn't (b/c calling `POST` request multiple times creates new child resources each time).
