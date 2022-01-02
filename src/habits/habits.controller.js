const habitsService = require("./habits.service");

function list(req, res, next) {
    habitsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  list,
};
