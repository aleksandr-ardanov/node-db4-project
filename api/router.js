const express = require('express');
const Recipes = require('./model');

const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json("good")
})


module.exports = router;