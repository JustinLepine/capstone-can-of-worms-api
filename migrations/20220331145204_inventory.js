exports.up = function(knex) {
  return knex.schema
    .createTable('inventory', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('depth').notNullable();
        table.string('target').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('inventory');
};
