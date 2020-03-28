# Login Component
The full component is located [here](https://github.com/chinmaymahajan/Registration-and-Login-using-MERN-stack/blob/master/src/components/Login.js).

This breaks that code down into blocks and explains them.

Here are the imports:
```
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginService from '../services/LoginService';
import Message from '../elements/Message';
import Error from '../elements/Error';
import {
  COMMON_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_FIELDS,
  LOGIN_MESSAGE,
  ERROR_IN_LOGIN,
} from '../MessageBundle';
```
The ones from the repository itself are explained in `supporting_components.md`.

```
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      password: '',
      error: false,
      loginSuccess: false,
    };
  }
```
So, we're keeping track of these states ^.

## Event Handlers
`handleOnChangeUserName` to update the text inside the Username box:
```
  handleOnChangeUserName = (e) => {
    this.setState({
      user_name: e.target.value,
    });
  };
```
`handleOnChangePassword` to update the text inside the Password box:
```
  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
```
`onSubmit` to update the states, `error` and `loginSuccess`. TLDR, when someone clicks the __Submit__ button, JS will call `onSubmit` to figure out whether or not to let the person in.
```
  onSubmit = async (e) => {
    // creates the data we're submitting as a POST request
    const data = {
      user_name: this.state.user_name,
      password: this.state.password,
    };
    // submits the POST request
    const loginResult = await LoginService(data);
    // Changing the states based on the outcomes (if their username/password is in the DB)
    if (loginResult !== 200) {
      this.setState({
        error: true,
        loginSuccess: false,
      });
    } else
      this.setState({
        loginSuccess: true,
        error: false,
      });
  };
```

## `render()` method
Here's the `render` method:
```
  render() {
    const { loginSuccess, error } = this.state;

    return (
      <div className="Login">
        <h1> {LOGIN_FIELDS.LOGIN_HEADING} </h1> {' '}
        <form onSubmit={this.onSubmit}>
          <div>
            <div className="fields">
              <p> {COMMON_FIELDS.USER_NAME} </p>    {' '}
              <input
                type="text"
                name="Username"
                onChange={this.handleOnChangeUserName}
                autoComplete="Username"
                required
              />
            </div>{' '}
            {' '}
            <div className="fields">
              {' '}
              <p> {COMMON_FIELDS.PASSWORD} </p>    {' '}
              <input
                type="password"
                name="Password"
                onChange={this.handleOnChangePassword}
                autoComplete="Password"
                required
              />{' '}
                  {' '}
            </div>{' '}
            {' '}
            <div className="buttons">
              {' '}
              <button
                type="button"
                onClick={this.onSubmit}
                className="btn btn-primary"
              >
                {' '}
                  {LOGIN_FIELDS.LOGIN}    {' '}
              </button>{' '}
                  <Link to="/register">
                     {REGISTRATION_FIELDS.REGISTER} </Link>  {' '}
               {' '}
            </div>{' '}
               {' '}
          </div>{' '}
           {' '}
        </form>{' '}
```
Here we're displaying either the success or error in login messages:
```
            {loginSuccess && <Message message={LOGIN_MESSAGE} />}    {' '}
        {error && <Error message={ERROR_IN_LOGIN} />}    {' '}
      </div>
    );
  }
}
```
