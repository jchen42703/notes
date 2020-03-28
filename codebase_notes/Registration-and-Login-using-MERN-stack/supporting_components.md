# Supporting Components

## From `Services`
### `LoginService`
* `import LoginService from '../services/LoginService';`

```
import axios from 'axios';
// POST request
const LoginService = data => (
	axios.post('http://localhost:4000/registration/login', data)
		.then(res => res.status) // returns the response status
)

export default LoginService;
```

### `Registration Service`
* `import Registration from './Registration';`
Note that `bcrypt` has the salt automatically included in the ouputted hash, so we don't need to store it, according to [this stackexchange post](https://security.stackexchange.com/questions/184799/bcrypt-no-need-to-store-salt).
* Having the salt in the output string isn't an issue because it's only purpose is to prevent rainbow table attacks (comparing against hash tables with common hashing algorithms that use no salt).
Here, it only stores the hash:

```
import axios from 'axios';
import bcrypt from 'bcryptjs';

export const UserRegistration = data => {
    const password = data.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    data["password"] = hash;

    return axios.post('http://localhost:4000/registration/register', data)
        .then(res => res.status);
};

export const UsernameValidation = data => (
    axios.post('http://localhost:4000/registration/validateUsername', data)
    .then(exist => exist.status)
)
```
But, the stackexchange post says to store both the hash and salt.

## From `Elements`
### `Message`
* `import Message from '../elements/Message';`

```
import React from 'react';

const Message = ({ message }) => (
	<div>
		<div className="alert alert-success" role="alert">
		<span className="glyphicon glyphicon-thumbs-up"></span>
		<span className="message">{message}</span>
		</div>
</div>
);

export default Message;
```
### `Error`
* `import Error from '../elements/Error';`

```
import React from 'react';

const Error = ({ message }) => (
	<div>
		<div className="alert alert-danger" role="alert">
		<span className="glyphicon glyphicon-thumbs-down"></span>
		<span className="message">{message}</span>
	</div>
</div>
);

export default Error;
```

## `MessageBundle.js`
Bunch of variables of strings for reuse:

```
export const REGISTRATION_FIELDS = {
	FIRST_NAME : 'First Name',
	LAST_NAME : 'Last Name',
	REGISTER: 'Register',
	CANCEL: 'Cancel',
	REGISTRATION_HEADING: 'Sign Up'
}

export const REGISTRATION_MESSAGE = 'Registered Successfully';
export const ERROR_IN_REGISTRATION = 'Error in Registration';
export const LOGIN_MESSAGE = 'Login Successful';
export const ERROR_IN_LOGIN = 'Error in Login'

export const COMMON_FIELDS = {
	USER_NAME : 'Username',
	PASSWORD : 'Password'
}

export const LOGIN_FIELDS = {
	LOGIN: 'Login',
	LOGIN_HEADING: 'Login'
}
```
