# [Redux Crash Course with React](https://www.youtube.com/watch?v=93p3LxR9xfM)

![](../images/redux_data_flow.jpg)

This tutorial demonstrates how to use Redux to let components from two separate hierarchies, `Posts` and `PostForm` to use the same states (`title` and `body`).

* `Store`: holds the whole state tree of application
  * The only way to change state inside it is to `dispatch` an `action` to it

## Actions
* Submitting form
