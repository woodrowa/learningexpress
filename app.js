const express = require('express');

const app = express();//returns an express application; central part of app

app.set('view engine', 'pug');//tells express which templating engine to use

app.get('/', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    res.render('index');
});

app.get('/cards', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Look at the question."});
});

app.listen(3000, ()=>{
    console.log('The application is running on local port: 3000')
});