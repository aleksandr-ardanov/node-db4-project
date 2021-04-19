const express = require('express');
const Recipes = require('./model');

const router = express.Router();

router.get('/:id', (req,res,next) => {
    Recipes.getAll(req.params.id)
        .then(all => {
            res.status(200).json(all)
        })
        .catch(err => {
            next(err)
        })
})


module.exports = router;