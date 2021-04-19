const db = require('../data/db-config')


const  getAll =async (recipe_id) => {
    const row =await db('recipes as r')
        .leftJoin('steps as s','r.recipe_id','s.recipe_id')
        .leftJoin('step_ingredients as i','s.step_id','i.step_id')
        .leftJoin('ingredients as in','in.ingredient_id','i.ingredient_id')
        .select('r.recipe_id','r.recipe_name','s.step_id','s.step_number',
        's.step_instructions','in.ingredient_name','in.ingredient_id','i.quantity')
        .orderBy('s.step_number')
        .where('r.recipe_id',recipe_id)
    const recipe = {
        recipe_id:row[0].recipe_id,
        recipe_name:row[0].recipe_name,
        steps: row.map(item => {
            if (item.step_id){
                return ({
                    step_id:item.step_id,
                    step_number:item.step_number,
                    step_instructions:item.step_instructions,
                    ingredient_name:item.ingredient_name,
                    quantity:item.quantity
                })
            }
        })
        }
    return recipe    
    }

module.exports = {getAll}