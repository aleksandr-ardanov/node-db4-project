const express = require('express');
const Recipes = require('./model');

const router = express.Router();

router.get('/', (req,res,next) => {
    Recipes.getAll()
        .then(all => {
            res.status(200).json(all)
        })
        .catch(err => {
            next(err)
        })
})


module.exports = router;