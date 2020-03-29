# Overview

## `src` folder
When you `yarn start`, it runs `index.js`, which renders the `App` component. This app component renders the `Login`/`Registration` components based on the current URL.

When `Login/Registration` are rendered, they call their respective 'services' (`LoginService` and `RegistrationService`), which create the `POST` requests to  `'http://localhost:4000/registration/login'` or `'http://localhost:4000/registration/register'`.

## `api` folder
This folder contains the backend verification of the `POST` request and all the middleware.

When you `yarn start`, it expects that the MongoDB database, specified in `DB.js` is running already. `app.js` connects to `PORT` (which is hardcoded to be __4000__) in this case.

The `app` itself is defined in `server.js`. Here, it connects to the MongoDB database with `mongoose`, and adds all the middleware to `app` with `app.use(...)`.

### Middleware Overview
The middleware handles steps actually taken to help parse the data in a way that lets us verify it and then send a status that can be verified in the frontend.

* `cors()` at root (`'/'`)
  * For accessing resources at different domains (flexible but can be a security risk)
* `bodyParser.urlencoded({ extended: true })` at root (`'/'`)
  * for parsing URL-encoded requests (forms)
  * `extended: true` means that the `req.body` object will contain values of any type instead of just strings.
* `bodyParser.json()` at root (`'/'`)
  * for parsing json files
* `registrationRoutes` at `'./schema/User'`
  * `registrationRoutes` is an `express.Router()`
  * Verifies registration at the registration route `constants/constants.js` based on whether or not it was saved in the database properly.
  * Verifies login at the login route in `constants/constants.js` based on whether or not the password matches properly (using `bcrypt.compare`)
  * Queries to see if the `user_name` is already in the database (`'/validateUsername'`)
  * Fetch all data in `'/allData'`
