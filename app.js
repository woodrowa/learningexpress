const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();//returns an express application; central part of app


app.use(bodyParser.urlencoded({extended: false}));//allows you to use bodyparser to specify info we want in request; parse application/x-www-form-urlencoded
app.use(cookieParser());

app.set('view engine', 'pug');//tells express which templating engine to use

app.use((req, res, next)=> {//middleware
    req.message = "This message made it!";
    console.log('One');
    next();
});

app.use((req, res, next)=> {//middleware
    console.log(req.message);
    next();
});

app.get('/', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    if (req.cookies.username){
    const name = req.cookies.username;//put name in its own variable and set it equal to name value in render
    res.render('index', {name: name});//will load saved username property from cookies; will fill in name value in pug file
    } else {
        res.redirect('/hello');
    }
});

app.get('/cards', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Look at the question."});
});

app.get('/hello', (req, res) =>{//get route serves the form
    if (req.cookies.username){
        res.redirect('/');
    } else{
        res.render('hello');
    }
});

app.post('/hello', (req, res) =>{//to post the form data to this route
    res.cookie('username', req.body.username);//send cookie to browser after you submit form; set username equal to req.body.username
    res.redirect('/');//redirects to the home page
});

app.post('/goodbye', (req, res)=>{
    res.clearCookie('username');
    res.redirect('/hello');
})

app.listen(3000, ()=>{
    console.log('The application is running on local port: 3000')
});