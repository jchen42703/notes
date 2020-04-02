# [How to create a React frontend and a Node/Express backend and connect them](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
Code is located [here](https://github.com/Joao-Henrique/React_Express_App_Medium_Tutorial).

## Setup
```
mkdir react_express_app_tutorial
cd react_express_app_tutorial

npx create-react-app client
// cd client
// npm start

// creates Express skeleton code
// npm install -g express-generator
npx express-generator api
cd api
npm install
// npm start
```

## Configuring a new route in the Express API
* Change PORTs
* Create middleware test API and add it to the express app.

## Connecting the React Client to the Express API
* Use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to retrieve data from the test API:

```
callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
```

## CORS
* Lets you access the testAPI @ PORT 9000 when you load the app from PORT 3000
