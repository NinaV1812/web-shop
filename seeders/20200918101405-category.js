"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "one category",
          description: "one description",
          imageUrl: "one url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "two category",
          description: "two description",
          imageUrl: "two url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "three category",
          description: "three description",
          imageUrl: "three url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
