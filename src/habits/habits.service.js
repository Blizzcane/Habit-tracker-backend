const knex = require("../db/connection");

function list() {
  return knex("habits").select("*");
}

function daily(day) {  
  return knex("habits").select("*").whereNot(day, null);
}

module.exports = {
  list,
  daily,
};
