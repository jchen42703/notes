# Backend Overview

## `validation` folder
* Basically check whether the username/password fields are "formatted" correctly during registration/login.
  * "formatted" as in the number of characters, whether it's left blank, etc.
* __Not checking whether or not the UN/pw are "correct"__

## `models` folder
* Contains the `UserSchema` and the `User` mongoose model
  * Allows you to query and check the stored hash with the user input in `config/passport.js` and `routes/api/users.js`

## `routes` folder
* Here is where we actually run the validation functions from `validation` and create the routes to `POST` to.
* This is also where:
  * users are created (if they don't exist already)
  * password hashes are checked for login
    * Creates token if the passwords hashes match
    * 
