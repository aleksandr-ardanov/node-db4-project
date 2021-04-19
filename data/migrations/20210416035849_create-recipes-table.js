
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name').unique().notNullable()
      tbl.dateTime('created_at')
  })
  .createTable('steps', tbl => {
    tbl.increments('step_id')
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('cascade')
      .onUpdate('cascade')
    tbl.integer('step_number')
      .unsigned()
      .notNullable()
    tbl.string('step_instructions')
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id')
    tbl.string('ingredient_name')
  })
  .createTable('step_ingredients', tbl => {
    tbl.integer('step_id')
      .unsigned()
      .notNullable()
      .references('step_id')
      .inTable('steps')
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('ingredients')
    tbl.integer('quantity')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
