# `bcryptjs`
This is not to be confused with the `bcrypt` package. They're different.
* Using bcrypt is a secured way to store passwords in my database regardless of whatever language my app’s backend is built in — PHP, Ruby, Python, Node.js, etc.

# Notes on [`How bcryptjs works`](https://medium.com/javascript-in-plain-english/how-bcryptjs-works-90ef4cb85bf4)

## What is password hashing?

## Features of bcryptjs
* __Salted Hashing:__ Generates __salt__ (random bytes) and combines it with the password before hashing.
  * Why is this good?
    * If two users have the same password, they will have different hashes.
    * This prevents rainbow table attacks, which can reverse hashed passwords using common hashing functions that don't use salt.
* Uses hashes that are __one way functions__ (meaning that they cannot be reversed).
  * They also have the property of generating very different hashes from tiny input changes.
  * Good because we want to make sure that the passwords are still protected even when the hashes are found and that we can verify user input for the passwords.

## General Password Workflow
1. User creates account.
2. Password is hashed with salt and stored in a DB.
3. When the user tries to login, the hash of the password they entered is checked against the hash of the real password.
4. If the hashes match, the user is granted access. If not, the user is told an error message.

## Bcrypt Password Workflow
1) Generate salt.
2) Hash the password with the generated salt.
3) When the user logs in, the hash is recalculated based on the user input and compared with the stored hash.

### Usage - Sync
```
// To hash a password:
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);
// Store hash in your password DB.
To check a password:
```
```
// Load hash from your password DB.
bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); // false
Auto-gen a salt and hash:

var hash = bcrypt.hashSync('bacon', 8);
```
