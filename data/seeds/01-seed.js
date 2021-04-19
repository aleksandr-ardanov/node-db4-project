const recipes = [
  {recipe_name: 'lasagna'},
  {recipe_name: 'beer'},
  {recipe_name: 'baked_potato'}
]

const ingredients = [
  {ingredient_name: 'dough'},
  {ingredient_name: 'onion'},
  {ingredient_name: 'squash'},
  {ingredient_name: 'rice'},
  {ingredient_name: 'tomato'},
  {ingredient_name: 'arugula'},
  {ingredient_name: 'cucumber'},
  {ingredient_name: 'lemon'},
  {ingredient_name: 'chicken'},
  
]
const steps = [
  {step_number: 1, step_instructions:'cut', recipe_id:1},
  {step_number: 2,step_instructions:'boil',recipe_id:1},
  {step_number: 3, step_instructions:'throw',recipe_id:1},
  {step_number: 1, step_instructions:'cut', recipe_id:2},
  {step_number: 2,step_instructions:'blew',recipe_id:2},
  {step_number: 3, step_instructions:'cocnate',recipe_id:2},
  {step_number: 1, step_instructions:'cut', recipe_id:3},
  {step_number: 2,step_instructions:'kadk',recipe_id:3},
  {step_number: 3, step_instructions:'pilt',recipe_id:3},
]

const step_ing =[
  {step_id: 1,ingredient_id:1,quantity:29},
  {step_id: 2,ingredient_id:2,quantity:12},
  {step_id: 1,ingredient_id:3,quantity:9},
  {step_id: 4,ingredient_id:1,quantity:29},
  {step_id: 5,ingredient_id:2,quantity:12},
  {step_id: 6,ingredient_id:3,quantity:9},
  {step_id: 7,ingredient_id:1,quantity:29},
  {step_id: 8,ingredient_id:2,quantity:12},
  {step_id: 9,ingredient_id:3,quantity:9},
]

exports.seed = async function(knex) {
      // Inserts seed entries
      await knex('recipes').insert(recipes);
     await knex('steps').insert(steps); 
     await knex('ingredients').insert(ingredients); 
     await knex('step_ingredients').insert(step_ing);
};
