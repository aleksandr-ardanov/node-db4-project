const db = require('../data/db-config')


const getAll = () => {
    return db('recipes as r')
        .leftJoin('steps as s','r.recipe_id','s.recipe_id')
        .leftJoin('step_ingredients as i','s.step_id','i.step_id')
        .leftJoin('ingredients as in','in.ingredient_id','i.ingredient_id')
}

module.exports = {getAll}