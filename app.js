const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();//returns an express application; central part of app


app.use(bodyParser.urlencoded({extended: false}));//allows you to use bodyparser to specify info we want in request; parse application/x-www-form-urlencoded
app.use(cookieParser());

app.set('view engine', 'pug');//tells express which templating engine to use

/*app.use((req, res, next)=> {//middleware
    //console.log('Hello');
    //const err = new Error("This is an error");//string is error message
    //err.status = 500;
    //next(err);
});*/

app.use((req, res, next)=> {//middleware
    console.log("Arien is the man");
    next();
});

const mainRoutes = require('./routes');//since folder has index.js file we don't need to refer to it when requiring it
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);//to tuse main routes
app.use('/cards', cardRoutes);//to use cards.js file and cards routes

app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handler
app.use((err,req,res,next)=>{
    res.locals.error=err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, ()=>{
    console.log('The application is running on local port: 3000')
});