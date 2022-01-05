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
          Wed: null,
          Thu: true,
          Fri: false,
          Sat: true,
          habit_color: "923232",
        },
        {
          habit_id: 2,
          habit_name: "Reading",
          description: "Reading books",
          Sun: false,
          Mon: false,
          Tue: false,
          Wed: true,
          Thu: true,
          Fri: true,
          Sat: true,
          habit_color: "f2f2aa",
        },
      ]);
    });
};
