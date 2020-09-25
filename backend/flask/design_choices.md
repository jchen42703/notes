# [Design Decisions in Flask](https://flask.palletsprojects.com/en/1.1.x/design/)

## The Explicit Application Object
* In Flask this is an instance of the `Flask` class. Each Flask application has to create an instance of this class itself and pass it the name of the module, but why can’t Flask do that itself?
```
from flask import Flask
app = Flask(__name__)
@app.route('/')
def index():
    return 'Hello World!'
```
  * __unit testing:__
    * When you want to test something it can be very helpful to create a minimal application to test specific behavior. When the application object is deleted everything it allocated will be freed again.
  * __subclassing:__
    * you can subclass the base class (`Flask`) to alter specific behavior. This would not be possible without hacks if the object were created ahead of time for you based on a class that is not exposed to you.

## The Routing System
* Werkzeug routing system which was designed to automatically order routes by complexity. This means that you can declare routes in arbitrary order and they will still work as expected.
  * required for decorator based routing because decorators could be fired in undefined order when the application is split into multiple modules.
  * routes in Werkzeug try to ensure that URLs are unique. Werkzeug will go quite far with that in that it will automatically redirect to a canonical URL if a route is ambiguous.

## One Template Engine
* Flask decides on one template engine: Jinja2.
* Template engines are like programming languages and each of those engines has a certain understanding about how things work. On the surface they all work the same: you tell the engine to evaluate a template with a set of variables and take the return value as string.

## Micro with Dependencies
