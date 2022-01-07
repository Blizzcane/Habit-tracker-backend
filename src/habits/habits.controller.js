const habitsService = require("./habits.service");

function list(req, res, next) {
  habitsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function getDailyHabits(req, res, next) {
  habitsService
    .daily(req.params.day)
    .then((data) => res.json({ data }))
    .catch(next);
}

async function updateHabitCompletion(req, res, next) {
  console.log("controller")
  console.log(req.body);

  await habitsService.updateCompletion(
    req.body.data
  )
  res.status(200).json({ data: { status: req.body.data } });

}

module.exports = {
  list,
  getDailyHabits,
  updateHabitCompletion,
};
