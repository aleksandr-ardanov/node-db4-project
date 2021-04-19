
exports.seed = async function(knex) {
      // Inserts seed entries
      await knex('recipes').insert([
        {recipe_name: 'lasagna'},
        {recipe_name: 'beer'},
        {recipe_name: 'baked_potato'}
      ]);
     await knex('steps').insert([
        {step_number: 1, step_instructions:'cut', recipe_id:1},
        {step_number: 2,step_instructions:'boil',recipe_id:1},
        {step_number: 1, step_instructions:'throw',recipe_id:2}
      ]); 
     await knex('ingredients').insert([
        {ingredient_name: 'dough'},
        {ingredient_name: 'onion'},
        {ingredient_name: 'squash'},
      ]); 
     await knex('step_ingredients').insert([
        {step_id: '1',ingredient_id:1,quantity:29},
        {step_id: '1',ingredient_id:2,quantity:12},
        {step_id: '3',ingredient_id:3,quantity:9},
      ]);
};
