const knex = require("../db/connection");

function list() {
  return knex("habits").select("*");
}

function daily(day) {
  console.log("day",day);
  return knex("habits").select("*").havingNotNull(day);
}

module.exports = {
  list,
  daily
};
