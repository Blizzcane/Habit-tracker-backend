
exports.up = function(knex) {
    return knex.schema.createTable("habits", (table) => {
        table.increments("habit_id").primary();
        table.string("habit_name"); 
        table.string("description");
        table.boolean("Sun"); 
        table.boolean("Mon"); 
        table.boolean("Tue"); 
        table.boolean("Wed"); 
        table.boolean("Thu"); 
        table.boolean("Fri"); 
        table.boolean("Sat"); 
        table.string("habit_color");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("habits");

};
