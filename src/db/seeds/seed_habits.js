exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("habits")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("habits").insert([
        { 
          habit_id: 1,
          habit_name: "Workout",
          habit_completed: false,
          habit_frequency: "Mon, Tue, Wed",
        },
      ]);
    });
};
