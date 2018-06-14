const express = require('express');
const router = express.Router();//router constructor, mini app in express that you can add middleware and routes to
const data = require('../data/flashcardData.json').data;//data for flashcards
const cards = data.cards;//access to cards data

router.get('/:id', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    res.render('card', {
        prompt: cards[req.params.id].question,
        hint: cards[req.params.id].hint
    });
});//dont need to put '/cards' since path is in app.js

module.exports = router;