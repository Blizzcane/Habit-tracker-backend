const router = require("express").Router();
const controller = require("./habits.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

router.route("/:day").get(controller.getDailyHabits).put(controller.updateHabitCompletion).all(methodNotAllowed);

module.exports = router;
