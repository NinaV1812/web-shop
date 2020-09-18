"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "one product",
          price: 464,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "two product",
          price: 8282,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "three product",
          price: 7373,
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
