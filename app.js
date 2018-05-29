const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();//returns an express application; central part of app

app.use(bodyParser.urlencoded({extended: false}));//allows you to use bodyparser to specify info we want in request
app.use(cookieParser());

app.set('view engine', 'pug');//tells express which templating engine to use

app.get('/', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    const name = req.cookies.username;//put name in its own variable and set it equal to name value in render
    res.render('index', {name: name});//will load saved username property from cookies; will fill in name value in pug file
});

app.get('/cards', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Look at the question."});
});

app.get('/hello', (req, res) =>{//get route serves the form
    res.render('hello');
});

app.post('/hello', (req, res) =>{//to post the form data to this route
    res.cookie('username', req.body.username);//send cookie to browser after you submit form; set username equal to req.body.username
    res.redirect('/');//redirects to the home page
});

app.listen(3000, ()=>{
    console.log('The application is running on local port: 3000')
});