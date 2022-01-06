const knex = require("../db/connection");

function list() {
  return knex("habits").select("*");
}

function daily(day) {
  return knex("habits").select("*").whereNot(day, null);
}

function updateCompletion(habit) {
  const { id, day, status } = habit;
  console.log(habit);
  console.log("service");

  return knex("habits").where({ habit_id: id }).update(day, status);
}

module.exports = {
  list,
  daily,
  updateCompletion,
};
