exports.up = knex => knex.schema.createTable("lists", table => {
  table.increments("id")
  table.text("title")
  table.text("description")
  table.text("color")
  table.boolean("isFavorite")
});

exports.down = knex => knex.schema.dropTable("lists")
