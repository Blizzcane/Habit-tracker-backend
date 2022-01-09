const service = require("./habits.service");

function list(req, res, next) {
  service
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function getHabits(req, res, next) {
  if (isNaN(req.params.id)) {
    service
      .daily(req.params.id)
      .then((data) => res.json({ data }))
      .catch(next);
  } else {
    service
      .listHabit(req.params.id)
      .then((data) => res.json({ data }))
      .catch(next);
  }
}

async function updateHabit(req, res, next) {
  if (isNaN(req.params.id)) { 
    await service.updateCompletion(req.body.data);
    res.status(200).json({ data: { status: req.body.data } });
  } else {
    await service.updateHabit(req.body.data);
    res.status(200).json({ data: { status: req.body.data } });
  }
}

async function createHabit(req, res, next) {
  const response = await service.create(req.body.data);
  res.status(201).json({ data: response[0] });
}

module.exports = {
  list,
  getHabits,
  updateHabit,
  createHabit,
};
