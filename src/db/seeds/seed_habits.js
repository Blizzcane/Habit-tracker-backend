exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("habits")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("habits").insert([
        {
          habit_id: 1,
          habit_name: "Exercise",
          description: "description here",
          Sun: true,
          Mon: true,
          Tue: false,
          Wed: true,
          Thu: true,
          Fri: false,
          Sat: true,
          habit_color: "923232"
        },
      ]);
    });
};
