const knex = require("../db/connection");

function list() {
  return knex("habits").select("*");
}

module.exports = {
  list,
};
