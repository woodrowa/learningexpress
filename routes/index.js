const express = require('express');
const router = express.Router();//router constructor, mini app in express that you can add middleware and routes to

//change all app to router
router.get('/', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    if (req.cookies.username){
    const name = req.cookies.username;//put name in its own variable and set it equal to name value in render
    res.render('index', {name: name});//will load saved username property from cookies; will fill in name value in pug file
    } else {
        res.redirect('/hello');
    }
});

router.get('/hello', (req, res) =>{//get route serves the form
    if (req.cookies.username){
        res.redirect('/');
    } else{
        res.render('hello');
    }
});

router.post('/hello', (req, res) =>{//to post the form data to this route
    res.cookie('username', req.body.username);//send cookie to browser after you submit form; set username equal to req.body.username
    res.redirect('/');//redirects to the home page
});

router.post('/goodbye', (req, res)=>{
    res.clearCookie('username');
    res.redirect('/hello');
})

module.exports = router;