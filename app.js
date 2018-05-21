const express = require('express');

const app = express();//returns an express application; central part of app

app.get('/', (request, response) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    response.send('I love Kimberly Dixon');
});

app.listen(3000);