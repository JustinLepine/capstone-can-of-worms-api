const inventoryItems = []

exports.seed = async function(knex) {
  return knex('inventory')
  .del()
  .then(() => {
    return knex('inventory')
      .insert(inventoryItems);
  })
};
