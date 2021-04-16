
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('recipe')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes')
};
