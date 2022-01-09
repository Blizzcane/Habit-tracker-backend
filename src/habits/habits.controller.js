const service = require("./habits.service");

function list(req, res, next) {
  service
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function getDailyHabits(req, res, next) {
  service
    .daily(req.params.day)
    .then((data) => res.json({ data }))
    .catch(next);
}

async function updateHabitCompletion(req, res, next) {
  console.log("controller")
  console.log(req.body); 

  await service.updateCompletion(
    req.body.data
  )
  res.status(200).json({ data: { status: req.body.data } });

}

async function createHabit(req, res, next) {
  const response = await service.create(req.body.data); 
  res.status(201).json({ data: response[0] });
}

module.exports = {
  list,
  getDailyHabits,
  updateHabitCompletion,
  createHabit
};
