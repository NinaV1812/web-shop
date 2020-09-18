"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Leo Messi",
          email: "leo@messi.com",
          phone: 1234567,
          password: "test",
          adress: "one adress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Dan Abramov",
          email: "dan@redux.com",
          phone: 1234567,
          password: "test",
          adress: "two adress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Nina Vorobeva",
          email: "nina@gmail.com",
          password: "tetsss",
          phone: 838383,
          adress: "three adress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
