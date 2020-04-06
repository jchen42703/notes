# Redux Main Concepts

## Overview
* `dispatch` __actions__
* Apply __middleware__ on actions
  * i.e. `thunk` from `redux-thunk` or Redux Dev Tools
* Then. call __root reducer__, which updates the state in the __store__.

## Store
* `Store`: holds the whole state tree of application
  * The only way to change state inside it is to `dispatch` an `action` to it
* This is usually set in a separate file, such as `store.js`.
* This can be created with `redux.createStore(reducer, initialState, enhancer)`

## [Actions](https://redux.js.org/basics/actions)
`Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.`
* They are functions that can take any argument and return `dispatch({type: ..., some_key_name:...})`
* __Need to review what's going on with the actions functions...__

## Reducers
* These take an initial state and action and return a (changed or unchanged) state.
* The main reducer is called the `rootReducer` which is fed into the `connect(...)` call.

## Reducer v. Middleware
* A __reducer__ is a function that:
  * takes some part of your state and the current dispatched action as arguments
  * returns an updated state
  * Multiple reducer functions can be composed together to form your root reducer function that you pass to `createStore()`.
  * supposed to be "pure functions", with no "side effects."  
    * That means no AJAX calls, no dispatching actions, and (in theory) no logging - just (state, action) => newState. (Now, you can do logging in a reducer, and that code will work fine, but as a matter of principle that's still not something a reducer is supposed to do.)
* A __middleware__ is a piece of code that wraps around the store's `dispatch` function.
  * Multiple middlewares can be turned into a pipeline through the `applyMiddleware()` enhancer.
  * When an action is dispatched, it will be __passed through each middleware__ in the pipeline in turn.
  * Each middleware can do whatever it wants with the action: log it, delay it, modify it, dispatch something else instead, or just pass it onwards down the pipeline.
  * the last middleware passes the action on to the actual `store.dispatch()` function, which calls the root reducer and starts the state update logic.

So...the main difference are their roles:
* Dispatch actions
* Apply middleware on actions
* __Then,__ call root reducer, which updates the state.

## Resources
* https://github.com/markerikson/react-redux-links/blob/master/redux-middleware.md
