"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "joinOrderProducts",
      [
        {
          quantity: 2,
          productId: 1,
          orderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 3,
          productId: 2,
          orderId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 8,
          productId: 3,
          orderId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("joinOrderProducts", null, {});
  },
};
