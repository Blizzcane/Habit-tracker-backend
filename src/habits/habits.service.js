const knex = require("../db/connection");

function list() {
  return knex("habits").select("*");
}

function daily(day) {
  return knex("habits").select("*").whereNot(day, null);
}

function updateCompletion(habit) {
  const { id, day, status } = habit; 

  return knex("habits").where({ habit_id: id }).update(day, status);
}

function create(habit) {
  return knex("habits")
  .insert(habit)
  .returning("*")
  .then((createdHabits) => createdHabits[0]);
}
 
module.exports = {
  list,
  daily,
  updateCompletion,
  create
};
