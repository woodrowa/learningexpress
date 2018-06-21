const express = require('express');
const router = express.Router();//router constructor, mini app in express that you can add middleware and routes to
const data = require('../data/flashcardData.json').data;//data for flashcards
const cards = data.cards;//access to cards data

router.get('/', (req, res)=>{
    const numberOfCards = cards.length;
    const flashcardId = Math.floor(Math.random() * numberOfCards);
    res.redirect(`/cards/${flashcardId}`);//will redirect to redirect below
});

router.get('/:id', (req, res) =>{//slash is the first parameter(location paramenter) and anonymous callback function
    const side = req.query.side;// we're setting either the string "answer" or "question" to side from the query string
    const id = req.params.id;//getting the card number from query string "id"
    
    if(!side){
        return res.redirect(`/cards/${id}?side=question`);
    };//res.redirect() doesnt stop the execution in the router.get method
    //since youre also calling res.render() at the bottom, you get an error so you need to return res.redirect()
    
    const text = cards[id][side];//we get either the answer or question from the flashcardData.json
    const hint = cards[id].hint;//we can get the hint in the same way
    const templateData = {text, id};//putting text and hint into templateData variable
    
    if (side === "question"){
       templateData.hint = hint;//setting templateData's hint property to the hint variable if side equals question
       templateData.sideToShow = "answer";
       templateData.sideToShowDisplay = "Answer";
    } else if(side === "answer"){
        templateData.sideToShow = "question";
        templateData.sideToShowDisplay = "Question";
    };

    res.render('card', templateData);//render card template with the data from json data 
});//dont need to put '/cards' since path is in app.js

module.exports = router;