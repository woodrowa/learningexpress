const express = require('express');

const app = express();//returns an express application; central part of app

app.set('view engine', 'pug');//tells express which templating engine to use

app.get('/', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    res.render('index');
});

app.get('/hello', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    res.send('<h1>Hello, Javascript developer!</h1>');
});

app.listen(3000, ()=>{
    console.log('The application is running on local port: 3000')
});