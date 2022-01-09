const router = require("express").Router();
const controller = require("./habits.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .post(controller.createHabit)
  .all(methodNotAllowed);

router
  .route("/:id")
  .get(controller.getHabits)
  .put(controller.updateHabit)
  .delete(controller.destroy)
  .all(methodNotAllowed);

module.exports = router;
