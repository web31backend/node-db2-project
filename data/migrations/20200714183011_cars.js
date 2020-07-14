
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.string("make", 128).notNullable();
        tbl.string("model", 128).notNullable();
        tbl.string("VIN", 128).notNullable().unique();
        tbl.integer("mileage", 128).notNullable();
        tbl.string("transmission", 128).nullable();
        tbl.string("status", 128).nullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
  };
  // The critical information for each car is the VIN, make, model, and mileage.