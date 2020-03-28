# [Axios](https://github.com/axios/axios)
HTTP Client (makes requests)
* works both in Node and in the browser
* Promise interface
* secure
(Note: `Express` __responds__ to requests while `axios` __makes__ the requests)

## Usage
```
const axios = require('axios');
// Make a request for a user with a given ID

axios.get('/userID=12345')  
.then(function (response) {    

// handle success    

console.log(response);  
})  
.catch(function (error) {    

// handle error    

console.log(error);  
})  
.finally(function () {    

// always executed  
});
```
