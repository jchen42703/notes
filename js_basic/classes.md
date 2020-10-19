# Javascript Classes
* Exist as syntactic sugar over the object/prototype API
* The syntax is similar to regular Java:
  * Create a class with the `class` keyword
  ```
  class Car {
      constructor(brand) {
        this.carname = brand;
      }
      present() {
        return 'I have a ' + this.carname;
      }
  }
  ```
  * Inherit a class with the `extends` keyword:
  ```
  class Model extends Car {
      constructor(brand, mod) {
        super(brand);
        this.model = mod;
      }
      show() {
        return this.present() + ', it is a ' + this.model;
      }
  }
  ```
  * Call the super class constructor with `super`: `super(arguments);  // calls the parent constructor (only inside the constructor)`
  * Call a parent method with `super`: `super.parentMethod(arguments);  // calls a parent method`

## [Please stop using classes in JavaScript](https://everyday.codes/javascript/please-stop-using-classes-in-javascript/)

* __Binding issues:__ As class constructor functions deal closely with this keyword, it can introduce potential binding issues, especially if you try to pass your class method as a callback to an external routine (hello, React devs 👋)
* [__Performance issues:__](https://medium.com/@gregsolo/es6-classes-vs-prototypes-performance-overview-dcab1e2fca9b) Because of classes’ implementation, they are notoriously difficult to optimize at runtime. While we enjoy performant machines at the moment, the fact that Moore’s law is fading away can change all that.
  * __Note:__ The performance issues are really only present when you have a large number of objects and in Chrome.
* __Private variables.__ One of the great advantages and the main reasons for classes in the first place, private variables, is just non-existent in JS.
* __Strict hierarchies.__ Classes introduce a straight top-to-bottom order and make changes harder to implement, which is unacceptable in most JS applications.
* __Because the React team tells you not to.__ While they did not explicitly deprecate the class-based components yet, they are likely to in the near future.

## Other Resources
* https://medium.com/@vapurrmaid/should-you-use-classes-in-javascript-82f3b3df6195
* https://www.quora.com/Are-ES6-classes-bad-for-JavaScript
