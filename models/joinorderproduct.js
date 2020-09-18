"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinOrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinOrderProduct.hasMany(models.order),
        joinOrderProduct.hasMany(models.product);
    }
  }
  joinOrderProduct.init(
    {
      quantity: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "joinOrderProduct",
    }
  );
  return joinOrderProduct;
};
