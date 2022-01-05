const habitsService = require("./habits.service");

function list(req, res, next) {
  habitsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function getDailyHabits(req, res, next) {
  console.log(req.body);
  habitsService
    .daily(req.body)
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  list,
  getDailyHabits
};
