const knex = require("../db/connection");

function list() {
  return knex("habits").select("*").orderBy('habit_id');
}

function listHabit(id) {
  return knex("habits").select("*").where({ habit_id: id }).first();
}

function daily(day) {
  return knex("habits").select("*").whereNot(day, null).orderBy('habit_id');
}

function updateCompletion(habit) {
  const { id, day, status } = habit;

  return knex("habits").where({ habit_id: id }).update(day, status);
}

function updateHabit(habit) {  
  return knex("habits").where({ habit_id: habit.habit_id }).update({...habit});
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
  create,
  listHabit,
  updateHabit
};
