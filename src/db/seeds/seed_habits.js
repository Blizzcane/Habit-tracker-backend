exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("habits")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("habits").insert([
        {
          id: 1,
          habit_id: "rowValue1",
          habit_name: "rowValue2",
          habit_completed: "rowValue3",
          habit_completed: "rowValue3",
        },
      ]);
    });
};
