
exports.up = function(knex) {
    return knex.schema.createTable("habits", (table) => {
        table.increments("habit_id").primary();
        table.string("habit_name");
        table.boolean("habit_completed");
        table.string("habit_frequency"); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("habits");

};
